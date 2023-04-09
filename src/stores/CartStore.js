import { defineStore } from "pinia"
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env

export default defineStore("cart", {
  state: () => ({
    cartsData: [],
    totalData: 0,
    finalTotalData: 0,
    loadingItem: '',
    loading: false
  }),
  actions: {
    // 取得購物車
    getCart() {
      this.loading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/cart`
      axios.get(url)
        .then(res => {
          this.cartsData = res.data.data.carts
          this.totalData = res.data.data.total
          this.finalTotalData = res.data.data.final_total
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
    // 加入購物車
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.loadingItem = id
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/cart`
      axios.post(url, { data })
        .then(res => {
          this.loadingItem = ''
          this.getCart()
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-cart-check-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
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
    },
    // 變更產品數量
    updateItem(item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/cart/${item.id}`
      axios.put(url, { data })
        .then(res => {
          this.getCart()
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-cart-check-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.loadingItem = ''
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
    },
    // 刪除單一產品
    removeItem(id) {
      this.loadingItem = id
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/cart/${id}`
      axios.delete(url)
        .then(res => {
          this.getCart()
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.loadingItem = ''
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
    },
    // 清空購物車
    removeAll() {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/carts`
      axios.delete(url)
        .then(() => {
          this.getCart()
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `購物車已清空`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
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
    },
    // 套用優惠券
    useCoupon(coupon) {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/coupon`
      const data = {
        code: coupon
      }
      axios.post(url, { data })
        .then(res => {
          this.finalTotalData = res.data.data.final_total
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: '已套用優惠券！',
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.getCart()
        })
        .catch(err => {
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${err.response.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
        })
    },
  },
  getters: {
    cart: ({ cartsData }) => {
      return cartsData
    },
    total: ({ totalData }) => {
      return totalData
    },
    final_total: ({ finalTotalData }) => {
      return finalTotalData
    },
    isLoading: ({ loading }) => {
      return loading
    }
  }
});