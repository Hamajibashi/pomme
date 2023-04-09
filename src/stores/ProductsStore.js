import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    productsData: [],
    productData: {},
    mealData: {},
    coffeeData: {},
    dessertData: {},
    page: {},
    category: '',
    loading: false
  }),
  actions: {
    // 取得線上商店產品
    getProducts(page = 1, category) {
      this.category = ''
      this.loading = true
      let url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/products?page=${page}`
      if (category) {
        url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/products?page=${page}&category=${category}`
        this.category = category
      }
      axios.get(url)
        .then(res => {
          if (!category) {
            this.productsData = res.data.products.filter(product => {
              return product.category !== '店內餐點' && product.category !== '店內飲品' && product.category !== '店內甜點'
            })
            let pagination = res.data.pagination;
            this.page = pagination;
          } else {
            this.productsData = res.data.products
            this.page = res.data.pagination
          }
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
    // 取得菜單
    getMenu() {
      this.loading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/products/all`
      axios.get(url)
        .then(res => {
          this.mealData = res.data.products.filter(product => {
            return product.category === '店內餐點'
          })
          this.coffeeData = res.data.products.filter(product => {
            return product.category === '店內飲品'
          })
          this.dessertData = res.data.products.filter(product => {
            return product.category === '店內甜點'
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
    // 取得單一產品
    getProduct(id) {
      this.loading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/product/${id}`
      axios.get(url)
        .then(res => {
          this.productData = res.data.product
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
    }
  },
  getters: {
    products: ({ productsData }) => {
      return productsData
    },
    product: ({ productData }) => {
      return productData
    },
    meal: ({ mealData }) => {
      return mealData
    },
    coffee: ({ coffeeData }) => {
      return coffeeData
    },
    dessert: ({ dessertData }) => {
      return dessertData
    },
    pagination: ({ page }) => {
      return page
    },
    isLoading: ({ loading }) => {
      return loading
    }
  }
})