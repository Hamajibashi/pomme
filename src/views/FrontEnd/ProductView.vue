<template>
  <teleport to='title'> | {{ product.title }}</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div
    style="background-image: url('https://images.unsplash.com/photo-1530088172039-5aa64cd6d3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');"
    class="d-flex align-items-center justify-content-center bg-setting">
    <div class="bg-primary p-5 mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <h2 class="h3 mb-0 fw-bold text-light text-center">線上商店</h2>
    </div>
  </div>
  <!-- 商品介紹 -->
  <div class="container-md">
    <div class="py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-decoration-none">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products" class="text-decoration-none">線上商店</router-link>
          </li>
          <li class="breadcrumb-item fw-bold"><router-link :to="`/product/${id}`" class="text-decoration-none">{{
            product.title }}</router-link></li>
        </ol>
      </nav>
      <div class="row flex-column flex-lg-row align-items-center align-items-lg-stretch">
        <!-- 圖片 -->
        <div class="col-lg-7" data-aos="fade-up">
          <div class="d-flex justify-content-center align-itens-center">
            <div class="overflow-hidden mb-3" style="max-width:600px; max-height:500px;">
              <img :src="product.imageUrl" :alt="product.title" class="object-cover object-center w-100 h-100 img-fluid">
            </div>
          </div>
        </div>
        <!-- 說明 -->
        <div class="col-lg-5">
          <div class="d-flex flex-column justify-content-between" data-aos="fade-up" data-aos-once="true">
            <span class="badge bg-secondary mb-2 fs-7 fit-content">{{ product.category }}</span>
            <h1 class="fw-bold h1 pb-2 mb-3 border-bottom">{{ product.title }}</h1>
            <p class="mb-2 text-muted" v-if="product.price !== product.origin_price">
              <del>NT${{ product.origin_price }}</del>
            </p>
            <p class="h4 mb-3 fw-bold">NT${{ product.price }}</p>
            <div class="row align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
              <div class="col-md-6">
                <select class="form-select mb-3" v-model.number="qty">
                  <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <button type="button" class="text-nowrap btn btn-primary w-100 py-2 mb-3"
                  @click="addToCart(product.id, qty)">加入購物車</button>
              </div>
            </div>
            <p class="border-bottom pb-2 mb-3 fs-7" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
              ★我們一歲了！結帳時輸入 <span class="text-danger">Pomme1Year</span> 即可享有 8 折優惠！</p>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
              <div class="mb-4">
                <p class="bg-primary text-light p-1 mb-2 fit-content">【商品說明】</p>
                <p class="mb-0">{{ product.description }}</p>
              </div>
              <div>
                <p class="bg-primary text-light p-1 mb-2 fit-content">【商品規格】</p>
                <p class="mb-0">{{ product.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 訂購須知 -->
  <div class="bg-primary text-light">
    <div class="container-md" data-aos="fade-up" data-aos-duration="800">
      <div class="py-5">
        <h2 class="fw-bold text-center mb-4">訂購須知</h2>
        <ol>
          <li class="mb-2">
            蛋糕類請冷藏保存，如需取用請勿超過 1 小時，建議於收到貨後 2 天內享用完畢。
          </li>
          <li class="mb-2">
            訂購完成後商品將於 3 天內寄出，請留意到貨訊息。
          </li>
          <li class="mb-2">
            請確認您要購買的商品資訊，包括商品名稱、數量、價格等是否正確無誤。
          </li>
          <li class="mb-2">
            請確認您的收貨地址、聯絡電話、付款方式等個人資訊是否正確無誤，以免影響商品送達及付款流程。
          </li>
          <li class="mb-2">
            若有缺貨情況，本店將會儘快與您聯繫，如無法接受，可選擇取消訂單或更換其他商品。
          </li>
          <li class="mb-2">
            網路商店的商品價格、庫存量及其他相關資訊均會不定時更新，因此當您下單時，商品的價格和庫存量可能已經發生變化，如有需要，請及時與我們聯繫。
          </li>
          <li class="mb-2">
            如您對商品有任何疑問或需要更多的幫助，請隨時與我們聯繫。電話：（07）9876-5431 或是 Email：pommecafe@mail.com
          </li>
        </ol>
      </div>
    </div>
  </div>
  <!-- 同類型商品 -->
  <div class="container-md" data-aos="fade-up" data-aos-duration="800">
    <div class="py-5">
      <h2 class="fw-bold text-center mb-4">也可以參考同類型商品</h2>
      <swiper-loop :same-category-products="sameCategoryProducts" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import CartStore from '@/stores/CartStore.js'
import SwiperLoop from '@/components/FrontEnd/SwiperLoop.vue'
import Swal from 'sweetalert2'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env
export default {
  data() {
    return {
      product: [],
      sameCategoryProducts: [],
      qty: 1,
      id: '',
      isLoading: false
    }
  },
  components: {
    SwiperLoop
  },
  methods: {
    getProduct(id) {
      this.isLoading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/product/${id}`
      this.axios.get(url)
        .then(res => {
          this.product = res.data.product
          this.getSameCategory(id, this.product)
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire({
            iconColor: '#992525',
            iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i>',
            text: `${err.response.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1500
          })
        })
    },
    getSameCategory(id, product) {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/products/all`

      this.axios.get(url)
        .then(res => {
          this.sameCategoryProducts = res.data.products.filter(item => {
            return item.id !== id && item.category === product.category
          })
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          Swal.fire({
            iconColor: '#992525',
            iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i>',
            text: `${err.response.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1500
          })
        })
    },
    ...mapActions(CartStore, ['addToCart'])
  },
  watch: {
    $route(to) {
      this.id = to.params.id
      // 轉換到非單一商品頁時會找不到 id
      if (this.$route.params.id) {
        this.getProduct(this.id)
      }
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getProduct(this.id)
  }
}
</script>
