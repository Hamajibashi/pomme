<template>
  <teleport to='title'> | 建立訂單</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container-md">
    <div class="py-5">
      <!-- 購物流程 -->
      <div class="mb-5 d-flex flex-column flex-sm-row text-center justify-content-center align-items-center">
        <div class="bg-secondary text-light p-3 w-100">
          <span class="fs-7">Step.1</span>
          <p class="mb-0">訂單建立</p>
        </div>
        <i class="bi bi-arrow-right fs-4 mx-2 d-none d-sm-block"></i>
        <i class="bi bi-arrow-down fs-4 mb-2 d-sm-none"></i>
        <div class="bg-primary text-light p-3 w-100">
          <span class="fs-7">Step.2</span>
          <p class="mb-0">確認結帳</p>
        </div>
        <i class="bi bi-arrow-right fs-4 mx-2 d-none d-sm-block"></i>
        <i class="bi bi-arrow-down fs-4 mb-2 d-sm-none"></i>
        <div class="bg-primary text-light p-3 w-100">
          <span class="fs-7">Step.3</span>
          <p class="mb-0">完成訂單</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center">
        <!-- 訂單明細 -->
        <div class="col-lg-5">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-3">訂單明細</h4>
            <div class="d-flex mb-4" v-for="item in cart" :key="item.id">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="me-2 img-fluid object-cover"
                style="width: 48px; height: 48px;">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                  <p class="mb-0">NT$ {{ $filters.currency(item.product.price) }}</p>
                </div>
                <p class="mb-0 fs-7">數量：{{ item.qty }}</p>
              </div>
            </div>
            <!-- 無使用優惠券 -->
            <div class="border-top pt-4" v-if="total === final_total">
              <div class="d-flex justify-content-between">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">NT$ {{ $filters.currency(final_total) }}</p>
              </div>
            </div>
            <!-- 有使用優惠券 -->
            <div class="border-top pt-4" v-else>
              <div class="d-flex justify-content-end mb-2 text-muted">
                <!-- <p class="mb-0">省下</p> -->
                <p class="mb-0">- NT$ {{ $filters.currency(total - final_total) }}</p>
              </div>
              <div class="d-flex justify-content-between mb-0 fw-bold h4">
                <p class="mb-0">優惠價</p>
                <p class="mb-0">NT$ {{ $filters.currency(final_total) }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 表單 -->
        <div class="col-lg-7">
          <VeeForm ref="form" v-slot="{ errors }" @submit="createOrder">
            <!-- 姓名 -->
            <div class="mb-3">
              <label for="name" class="form-label d-flex align-items-center">收件人姓名<span
                  class="badge bg-danger ms-2">必填</span></label>
              <VeeField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名" rules="required" v-model="form.user.name"></VeeField>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label d-flex align-items-center">收件人 Email<span
                  class="badge bg-danger ms-2">必填</span></label>
              <VeeField id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                v-model="form.user.email"></VeeField>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <!-- 電話 -->
            <div class="mb-3">
              <label for="tel" class="form-label d-flex align-items-center">收件人電話<span
                  class="badge bg-danger ms-2">必填</span></label>
              <VeeField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" rules="required|min:8|integer" v-model="form.user.tel"></VeeField>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <!-- 地址 -->
            <div class="mb-3">
              <label for="address" class="form-label d-flex align-items-center">收件人地址<span
                  class="badge bg-danger ms-2">必填</span></label>
              <VeeField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址" rules="required" v-model="form.user.address"></VeeField>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <!-- 留言 -->
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <VeeField id="message" name="留言" class="form-control" placeholder="有任何需求歡迎填寫" cols="30" rows="8"
                maxlength="50" v-model="form.message" as="textarea"></VeeField>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <router-link to="/cart" class="text-decoration-none"><i class="bi bi-caret-left-fill"></i>
                回到購物車</router-link>
              <button type="submit" class="btn btn-primary" :disabled="cart.length === 0">送出訂單</button>
            </div>
          </VeeForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions, mapState } from 'pinia'
import CartStore from '@/stores/CartStore.js'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 送出訂單
    createOrder() {
      const data = this.form
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/order`
      this.axios.post(url, { data })
        .then(res => {
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.$refs.form.resetForm()
          this.getCart()
          this.$router.push(`/checkout/${res.data.orderId}`)
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
    ...mapActions(CartStore, ['getCart'])
  },
  computed: {
    ...mapState(CartStore, ['cart', 'total', 'final_total', 'isLoading'])
  },
  mounted() {
    this.getCart()
  }
}
</script>