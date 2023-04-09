<template>
  <div class="container-fluid" v-if="checkSuccess">
    <div class="row flex-nowrap">
      <div class="col-md-2 px-0">
        <div class="d-flex flex-column text-light bg-primary py-4 vh-100 w-auto position-fixed">
          <router-link to="/admin" class="mb-4 text-light text-decoration-none px-5">
            <h1 class="h3 fw-bold"><span class="logo">Pomme</span> 後台</h1>
          </router-link>
          <ul class="navbar-nav flex-column mb-auto fs-5 px-5">
            <li class="nav-item">
              <router-link to="/admin" class="nav-link" :class="{ 'text-secondary': this.$route.path === '/admin' }">
                <i class="bi bi-house-door-fill me-2"></i>
                後台首頁
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link"
                :class="{ 'text-secondary': this.$route.path === '/admin/products' }">
                <i class="bi bi-shop me-2"></i>
                商品管理
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link"
                :class="{ 'text-secondary': this.$route.path === '/admin/orders' }">
                <i class="bi bi-card-list me-2"></i>
                訂單管理
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/articles" class="nav-link"
                :class="{ 'text-secondary': this.$route.path === '/admin/articles' }">
                <i class="bi bi-pencil-fill me-2"></i>
                文章管理
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link"
                :class="{ 'text-secondary': this.$route.path === '/admin/coupons' }">
                <i class="bi bi-tag-fill me-2"></i>
                優惠券管理
              </router-link>
            </li>
          </ul>
          <button type="button" class="btn btn-secondary text-light mx-3" @click="logout">登出</button>
        </div>
      </div>
      <div class="col-md-10 px-0">
        <RouterView v-if="checkSuccess" />
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_BASEURL } = import.meta.env
export default {
  data() {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*\=\s*([^;]*).*$)|^.*$/, '$1') // eslint-disable-line
      if (token) {
        this.axios.defaults.headers.common.Authorization = `${token}`
        const url = `${VITE_BASEURL}/v2/api/user/check`
        this.axios.post(url)
          .then(() => {
            this.checkSuccess = true
          })
          .catch(err => {
            Swal.fire({
              iconColor: '#992525',
              iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i>',
              text: `${err.response.data.message}`,
              showConfirmButton: false,
              width: 250,
              timer: 1500
            })
            this.$router.push('/login')
          })
      } else {
        Swal.fire({
          iconColor: '#992525',
          iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i>',
          text: '請重新登入',
          showConfirmButton: false,
          width: 250,
          timer: 1500
        })
        this.$router.push('/login')
      }
    },
    logout() {
      const url = `${VITE_BASEURL}/v2/logout`
      this.axios.post(url)
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          Swal.fire({
            iconColor: '#992525',
            iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i>',
            text: `${err.response.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1500
          })
        })
    }
  },
  mounted() {
    this.checkLogin()
  }
}
</script>
