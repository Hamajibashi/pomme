<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-3">
    <div class="container-md">
      <router-link class="logo h1 text-decoration-none text-light me-5" to="/" @click="hideMenu">Pomme</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/menu" class="nav-link fw-bold" :class="{ 'text-secondary': this.$route.path === '/menu' }"
              @click="hideMenu">美味菜單</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link fw-bold"
              :class="{ 'text-secondary': this.$route.path === '/products' }" @click="hideMenu">線上商店</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link fw-bold" :class="{ 'text-secondary': this.$route.path === '/news' }"
              @click="hideMenu">最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/access" class="nav-link fw-bold"
              :class="{ 'text-secondary': this.$route.path === '/access' }" @click="hideMenu">交通方式</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link position-relative d-none d-lg-block"
              :class="{ 'text-secondary': this.$route.path === '/cart' }">
              <i class="bi bi-cart h5"></i>
              <span class="badge rounded-pill bg-danger position-absolute top-0 start-50" v-if="cart.length">{{
                cart.length }}</span>
            </router-link>
            <router-link to="/cart" class="nav-link fw-bold d-lg-none"
              :class="{ 'text-secondary': this.$route.path === '/cart' }" @click="hideMenu">
              購物車 <span v-if="cart.length">({{ cart.length }})</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <!-- Footer -->
  <footer>
    <!-- 訂閱我們 -->
    <div
      style="background-image: url('https://images.unsplash.com/photo-1646346835055-549f7e3ea8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'); height:200px;" class="bg-setting">
      <div class="container-md">
        <div class="row">
          <div class="col-md-6">
            <div class="py-5">
              <p class="mb-3 fw-bold text-center text-md-start" data-aos="fade-up" data-aos-duration="800">
                訂閱電子報獲取我們的最新消息！</p>
              <VeeForm ref="vform" class="w-md-50 mt-md-0 mt-3" v-slot="{ errors }" @submit="subscribe" data-aos="fade-up"
                data-aos-duration="800">
                <div class="input-group w-100">
                  <VeeField id="email" name="email" type="email" class="form-control rounded-0"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required">
                  </VeeField>
                  <button class="btn btn-primary text-light rounded-0" type="submit">
                    送出
                  </button>
                  <error-message name="email" class="invalid-feedback"></error-message>
                </div>
              </VeeForm>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 店家資訊 -->
    <div class="bg-primary pt-5 pb-4">
      <div class="container-md">
        <div class="d-flex align-items-center justify-content-center justify-content-sm-between mb-4">
          <router-link class="text-light h2 logo text-decoration-none mb-0" to="/">Pomme</router-link>
          <div class="d-none d-sm-inline">
            <ul class="d-flex list-unstyled mb-0 fs-3">
              <li class="float-hover"><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li>
              <li class="float-hover"><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li>
              <li class="float-hover"><a href="https://github.com/Hamajibashi/pomme" target="_blank"
                  class="text-white mx-3"><i class="bi bi-github"></i></a></li>
              <li class="float-hover"><router-link class="text-white ms-3" to="/login" target="_blank"><i
                    class="bi bi-gear"></i></router-link></li>
            </ul>
          </div>
        </div>
        <div class="d-sm-none mb-4 d-flex justify-content-center">
          <ul class="d-flex list-unstyled mb-0 fs-1">
            <li class="float-hover"><a href="#" class="mx-3 text-light"><i class="bi bi-facebook"></i></a></li>
            <li class="float-hover"><a href="#" class="mx-3 text-light"><i class="bi bi-instagram"></i></a></li>
            <li class="float-hover"><a href="https://github.com/Hamajibashi/pomme" target="_blank"
                class="mx-3 text-light"><i class="bi bi-github"></i></a></li>
            <li class="float-hover"><router-link class="ms-3 text-light" to="/login" target="_blank"><i
                  class="bi bi-gear"></i></router-link></li>
          </ul>
        </div>
        <div class="d-flex justify-content-center justify-content-sm-between text-light">
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="bi bi-geo-alt-fill me-1"></i>
              高雄市鹽埕區公園二路 166 號
            </li>
            <li class="mb-2">
              <a href="tel:+886-7-98765431" class="text-decoration-none text-light">
                <i class="bi bi-telephone-fill me-1"></i>
                07-9876-5431
              </a>
            </li>
            <li class="mb-2">
              <a href="mailto:pommecafe@mail.com" class="text-decoration-none text-light">
                <i class="bi bi-envelope-fill me-1"></i>
                pommecafe@mail.com
              </a>
            </li>
            <li>
              <i class="bi bi-clock-fill me-1"></i>
              營業時間：11:00 ~ 20:00（每周三公休）
            </li>
          </ul>
        </div>
        <div class="text-light text-center">
          <p class="mb-2">© <span class="logo">Pomme</span></p>
          <p class="mb-0" style="font-size: 0.75rem;">本網站僅供個人作品使用，不提供任何商業用途</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Collapse } from 'bootstrap'
import Swal from 'sweetalert2'
import { mapState, mapActions } from 'pinia'
import CartStore from '@/stores/CartStore.js'

export default {
  methods: {
    subscribe() {
      Swal.fire({
        iconColor: '#004c34',
        iconHtml: '<i class="bi bi-envelope-fill"></i>',
        title: '訂閱成功',
        text: '隨時注意我們的新消息！',
        showConfirmButton: false,
        width: 300,
        timer: 1800
      }
      )
      this.$refs.vform.resetForm();
    },
    hideMenu() {
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new Collapse(menuToggle, { toggle: false })
      bsCollapse.hide()
    },
    ...mapActions(CartStore, ['getCart'])
  },
  computed: {
    ...mapState(CartStore, ['cart'])
  },
  mounted() {
    this.getCart()
  }
}
</script>
