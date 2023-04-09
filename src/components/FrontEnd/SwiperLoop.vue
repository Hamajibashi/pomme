<template>
  <div>
    <swiper class="px-md-5" :slides-per-view="1" :space-between="50" :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }" :modules="modules" :navigation="true" :breakpoints="{
  '768': {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 24
  },
}">
      <swiper-slide v-for="product in sameCategoryProducts" :key="product.id">
        <div class="card border-0 shadow-sm h-100 cursor-pointer" data-aos="fade-up"
          @click="$router.push(`/product/${product.id}`)">
          <img :src="product.imageUrl" class="card-img-top object-cover img-hover" :alt="product.title" height="300">
          <div class="card-body p-4 d-flex justify-content-between align-items-center">
            <div>
              <span class="badge bg-secondary mb-2">{{ product.category }}</span>
              <h4 class="mb-0 fw-bold">{{ product.title }}</h4>
              <p class="card-text mb-0 h5">NT$ {{ product.price }} <span class="text-muted fs-6"
                  v-if="product.price !== product.origin_price"><del>NT${{ product.origin_price
                  }}</del></span>
              </p>
            </div>
            <a class="btn" @click.stop="addToCart(product.id)">
              <i class="bi bi-cart-plus-fill h2"></i>
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import CartStore from '@/stores/CartStore.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'


export default {
  props: ['sameCategoryProducts'],
  data() {
    return {
      modules: [Navigation, Autoplay]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    ...mapActions(CartStore, ['addToCart'])
  },
}
</script>
<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  color: #004c34;
}
</style>