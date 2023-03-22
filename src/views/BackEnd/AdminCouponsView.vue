<template>
  <teleport to='title'> | 優惠券管理</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container p-5">
    <div class="d-flex justify-content-between mb-4">
      <h1 class="h2 fw-bold">優惠券管理</h1>
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coupon, key) in coupons" :key="key">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ $filters.date(coupon.due_date) }}</td>
          <td>
            <span v-if="coupon.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', coupon)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', coupon)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <pagination-component @emit-pages="getCoupons" :pages="pagination" />
    <!-- 優惠券 Modal -->
    <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
      aria-hidden="true">
      <coupon-modal :is-new="isNew" :coupon="tempCoupon" @update-coupon="updateCoupon"></coupon-modal>
    </div>
    <!-- 刪除 Modal -->
    <div id="deleteModal" ref="deleteModal" class="modal fade" tabindex="-1" aria-labelledby="deleteModalLabel"
      aria-hidden="true">
      <delete-modal :item="tempCoupon" @del-item="deleteCoupon"></delete-modal>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import PaginationComponent from '../../components/FrontEnd/PaginationComponent.vue'
import DeleteModal from '../../components/BackEnd/DeleteModal.vue'
import CouponModal from '../../components/BackEnd/CouponModal.vue'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env
export default {
  components: {
    PaginationComponent,
    DeleteModal,
    CouponModal
  },
  data() {
    return {
      tempCoupon: [],
      pagination: {},
      isNew: true,
      deleteModal: null,
      couponModal: null,
      isLoading: false
    }
  },
  methods: {
    // 取得優惠券
    getCoupons(page = 1) {
      this.isLoading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/coupons?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          console.log(err.response)
        })
    },
    // 編輯優惠券
    updateCoupon(tempCoupon) {
      // 預設為新增產品
      let url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/coupon`
      let httpMethod = 'post'
      
      // 當 isNew 為 false 時 = 編輯產品時
      if (!this.isNew) {
        url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/coupon/${tempCoupon.id}`
        httpMethod = 'put'
      }
      
      this.axios[httpMethod](url, { data: tempCoupon })
      .then(res => {
        Swal.fire({
          iconColor: '#004c34',
          iconHtml: '<i class="bi bi-check-circle-fill"></i>',
          text: `${res.data.message}`,
          showConfirmButton: false,
          width: 250,
          timer: 1200
        })
        this.couponModal.hide()
        this.getCoupons()
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
    // 刪除優惠券
    deleteCoupon() {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/coupon/${this.tempCoupon.id}`
      this.axios.delete(url)
        .then(res => {
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.deleteModal.hide()
          this.getCoupons()
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
    // 打開 Modal
    openModal(status, coupon) {
      if (status === 'delete') {
        this.tempCoupon = { ...coupon }
        this.deleteModal.show()
      } else if (status === 'edit') {
        this.isNew = false
        this.tempCoupon = { ...coupon }
        this.couponModal.show()
      } else if (status === 'new') {
        this.isNew = true
        this.tempCoupon = { imagesUrl: [] }
        this.couponModal.show()
      }
    },
  },
  mounted() {
    this.getCoupons()
    this.deleteModal = new Modal('#deleteModal')
    this.couponModal = new Modal('#couponModal')
  }
}
</script>