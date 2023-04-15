<template>
  <teleport to='title'> | 線上商店</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div style="background-image: url('https://images.unsplash.com/photo-1530088172039-5aa64cd6d3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); height:300px;"
      class="d-flex align-items-center justify-content-center bg-setting">
      <div class="bg-primary p-5 mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <h2 class="h3 mb-0 fw-bold text-light text-center">線上商店</h2>
      </div>
  </div>
  <div class="container-md">
      <div class="py-5">
          <div class="row d-flex flex-column flex-sm-row">
              <!-- 左側選單 -->
              <div class="col-md-3 mb-3" data-aos="fade-up" data-aos-duration="800">
                  <ul class="list-group list-unstyled sticky-top sticky-position fs-5">
                      <li>
                          <a href="#" class="list-group-item list-group-item-action text-decoration-none"
                              @click.prevent="getAllProducts(1)" :class="{ 'active': category === '' }">全部商品</a>
                      </li>
                      <li>
                          <a href="#" class="list-group-item list-group-item-action text-decoration-none"
                              :class="{ 'active': category === '咖啡' }" @click.prevent="getProducts(1, '咖啡')">咖啡</a>
                      </li>
                      <li>
                          <a href="#" class="list-group-item list-group-item-action text-decoration-none"
                              :class="{ 'active': category === '蛋糕' }" @click.prevent="getProducts(1, '蛋糕')">蛋糕</a>
                      </li>
                      <li>
                          <a href="#" class="list-group-item list-group-item-action text-decoration-none"
                              :class="{ 'active': category === '餅乾' }" @click.prevent="getProducts(1, '餅乾')">餅乾</a>
                      </li>
                      <li>
                          <a href="#" class="list-group-item list-group-item-action text-decoration-none"
                              :class="{ 'active': category === '手作食器' }" @click.prevent="getProducts(1, '手作食器')">手作食器</a>
                      </li>
                  </ul>
              </div>
              <!-- 產品列表 -->
              <div class="col-md-9" data-aos="fade-up" data-aos-duration="800">
                  <div class="row">
                      <div class="col-md-6 col-lg-4 mb-3" v-for="product in products" :key="product.id">
                          <div class="card border-0 shadow-sm h-100 cursor-pointer"
                              @click="$router.push(`/product/${product.id}`)">
                              <img :src="product.imageUrl" class="card-img-top object-cover img-hover"
                                  :alt="product.title" height="300">
                              <div class="card-body p-4 d-flex justify-content-between align-items-center">
                                  <div>
                                      <span class="badge bg-secondary mb-2">{{ product.category }}</span>
                                      <h4 class="mb-0 fw-bold">{{ product.title }}</h4>
                                      <p class="card-text mb-0 h5">NT$ {{ product.price }} <span class="text-muted fs-6"
                                              v-if="product.price !== product.origin_price"><del>NT${{
                                                  product.origin_price }}</del></span>
                                      </p>
                                  </div>
                                  <a class="btn" @click.stop="addToCart(product.id)">
                                      <i class="bi bi-cart-plus-fill h2"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- 分頁 -->
                  <nav class="d-flex justify-content-center">
                      <pagination-component @emit-pages="getAllProducts" :pages="pagination" v-if="category == ''"/>
                      <pagination-component @emit-pages="getProducts" :pages="pagination" v-else/>
                  </nav>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PaginationComponent from '@/components/FrontEnd/PaginationComponent.vue'
import { mapActions, mapState } from 'pinia'
import ProductsStore from '@/stores/ProductsStore.js'
import CartStore from '@/stores/CartStore.js'

export default {
  components: {
      PaginationComponent
  },
  methods: {
      ...mapActions(ProductsStore, ['getProducts', 'getAllProducts']),
      ...mapActions(CartStore, ['addToCart'])
  },
  computed: {
      ...mapState(ProductsStore, ['products', 'category', 'isLoading', 'pagination'])
  },
  mounted() {
      this.getAllProducts(1)
  }
}
</script>
