<template>
  <teleport to='title'> | 訂單管理</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container p-5">
    <h1 class="h2 fw-bold mb-4">訂單管理</h1>
    <table class="table table-hover mb-4">
      <thead class="table-dark">
        <tr>
          <th width="120">
            購買時間
          </th>
          <th>Email</th>
          <th width="120">
            購買品項
          </th>
          <th width="120">
            應付金額
          </th>
          <th width="100">
            是否付款
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="order in orders" :key="order.id">
          <tr v-if="orders.length" :class="{ 'text-secondary': order.is_paid }">
            <td>{{ $filters.date(order.create_at) }}</td>
            <td>{{ order.user.email }}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in order.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td>{{ order.total }}</td>
            <td>
              <span class="text-success" v-if="order.is_paid">已付款</span>
              <span v-else class="text-muted">未付款</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', order)">
                  檢視
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                  data-bs-target="#deleteModal" @click="openModal('delete', order)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- 分頁 -->
    <pagination-component @emit-pages="getOrders" :pages="pagination" />
    <!-- 訂單 Modal -->
    <div id="orderModal" ref="orderModal" class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel"
      aria-hidden="true">
      <order-modal :temp-order="tempOrder" :update-order="updateOrder"></order-modal>
    </div>
    <!-- 刪除 Modal -->
    <div id="deleteModal" ref="deleteModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel"
      aria-hidden="true">
      <delete-modal :item = "tempOrder" @del-item="deleteOrder"></delete-modal>
    </div>
  </div>
</template>
  
<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import PaginationComponent from '../../components/FrontEnd/PaginationComponent.vue'
import DeleteModal from '../../components/BackEnd/DeleteModal.vue'
import OrderModal from '../../components/BackEnd/OrderModal.vue'

const { VITE_BASEURL, VITE_APIPATH } = import.meta.env

export default {
  components: {
    PaginationComponent,
    DeleteModal,
    OrderModal
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
      deleteModal: null,
      orderModal: null
    }
  },
  methods: {
    // 取得訂單
    getOrders(page = 1) {
      this.isLoading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/orders?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          console.log(err.response)
        })
    },
    // 編輯訂單
    updateOrder() {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/order/${this.tempOrder.id}`

      this.axios.put(url, { data: this.tempOrder })
        .then(res => {
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.orderModal.hide()
          this.getOrders()
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
    // 刪除單筆訂單
    deleteOrder(id) {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/order/${id}`
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
          this.getOrders()
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
    openModal(status, order) {
      if (status === 'delete') {
        this.tempOrder = { ...order }
        this.deleteModal.show()
      } else if (status === 'edit') {
        this.tempOrder = { ...order }
        this.orderModal.show()
      }
    }
  },
  mounted() {
    this.getOrders()
    this.deleteModal = new Modal('#deleteModal')
    this.orderModal = new Modal('#orderModal')
  }
}
</script>
  