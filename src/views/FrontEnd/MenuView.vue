<template>
  <teleport to='title'> | 美味菜單</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div
    style="background-image: url('https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); height:300px;"
    class="d-flex align-items-center justify-content-center bg-setting">
    <div class="bg-primary p-5 mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <h2 class="h3 mb-0 fw-bold text-light text-center">美味菜單</h2>
    </div>
  </div>
  <div class="container-md">
    <div class="py-5">
      <div class="row d-flex flex-column flex-sm-row">
        <!-- 餐點列表 -->
        <h3 class="fw-bold bg-primary text-light py-3 mb-4 w-100">餐點</h3>
        <div class="col-md-6 col-lg-4 col-xl-3 mb-2 mb-sm-3" v-for="product in meal" :key="product.id">
          <div class="card border-0 mb-4 shadow-sm h-100 bg-primary text-light" data-aos="fade-up">
            <img :src="product.imageUrl" class="card-img-top object-cover" :alt="product.title" height="300">
            <div class="card-body py-4 d-flex justify-content-between align-items-center">
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="mb-0 fw-bold">{{ product.title }}</h4>
                  <p class="card-text mb-0 h5">NT$ {{ product.price }} <span class="text-muted"
                      v-if="product.price !== product.origin_price"><del>NT${{ product.origin_price }}</del></span></p>
                </div>
                <p class="mb-0">{{ product.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <h3 class="fw-bold bg-primary text-light py-3 my-4 w-100">飲品</h3>
        <div class="col-md-6 col-lg-4 col-xl-3 mb-3" v-for="product in coffee" :key="product.id">
          <div class="card border-0 mb-4 shadow-sm h-100 bg-primary text-light" data-aos="fade-up">
            <img :src="product.imageUrl" class="card-img-top object-cover" :alt="product.title" height="300">
            <div class="card-body py-4 d-flex justify-content-between align-items-center">
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="mb-0 fw-bold">{{ product.title }}</h4>
                  <p class="card-text mb-0 h5">NT$ {{ product.price }} <span class="text-muted"
                      v-if="product.price !== product.origin_price"><del>NT${{ product.origin_price }}</del></span></p>
                </div>
                <p class="mb-0">{{ product.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <h3 class="fw-bold bg-primary text-light py-3 my-4 w-100">甜點</h3>
        <div class="col-md-6 col-lg-4 col-xl-3 mb-3" v-for="product in dessert" :key="product.id">
          <div class="card border-0 mb-4 shadow-sm h-100 bg-primary text-light" data-aos="fade-up">
            <img :src="product.imageUrl" class="card-img-top object-cover" :alt="product.title" height="300">
            <div class="card-body py-4 d-flex justify-content-between align-items-center">
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="mb-0 fw-bold">{{ product.title }}</h4>
                  <p class="card-text mb-0 h5">NT$ {{ product.price }} <span class="text-muted"
                      v-if="product.price !== product.origin_price"><del>NT${{ product.origin_price }}</del></span></p>
                </div>
                <p class="mb-0">{{ product.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions, mapState } from 'pinia'
import ProductsStore from '@/stores/ProductsStore.js'

export default {
  methods: {
    ...mapActions(ProductsStore, ['getMenu'])
  },
  computed: {
    ...mapState(ProductsStore, ['meal', 'coffee', 'dessert', 'isLoading', 'pagination'])
  },
  mounted() {
    this.getMenu()
  }
}
</script>
  