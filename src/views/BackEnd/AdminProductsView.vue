<template>
  <teleport to='title'> | 商品管理</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container p-5">
    <div class="d-flex justify-content-between mb-4">
      <h1 class="h2 fw-bold">商品管理</h1>
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的商品
      </button>
    </div>
    <table class="table table-hover mb-4">
      <thead class="table-dark">
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" :class="{ 'text-muted': !product.is_enabled }">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', product)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                data-bs-target="#deleteModal" @click="openModal('delete', product)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <pagination-component @emit-pages="getProducts" :pages="pagination" />
    <!-- 產品 Modal -->
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
      aria-hidden="true">
      <product-modal :is-new="isNew" :temp-product="tempProduct" @update-product="updateProduct"></product-modal>
    </div>
    <!-- 刪除 Modal -->
    <div id="deleteModal" ref="deleteModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel"
      aria-hidden="true">
      <delete-modal :item="tempProduct" @del-item="deleteProduct"></delete-modal>
    </div>
  </div>
</template>
  
<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import PaginationComponent from '../../components/FrontEnd/PaginationComponent.vue'
import DeleteModal from '../../components/BackEnd/DeleteModal.vue'
import ProductModal from '../../components/BackEnd/ProductModal.vue'

const { VITE_BASEURL, VITE_APIPATH } = import.meta.env


export default {
  components: {
    PaginationComponent,
    DeleteModal,
    ProductModal
  },
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      pagination: {},
      isNew: true,
      isLoading: false,
      deleteModal: null,
      productModal: null
    }
  },
  methods: {
    // 取得產品
    getProducts(page = 1) {
      this.isLoading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/products?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          console.log(err.response)
        })
    },
    // 新增或更新產品
    updateProduct(tempProduct) {
      // 預設為新增產品
      let url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/product`
      let httpMethod = 'post'

      // 當 isNew 為 false 時 = 編輯產品時
      if (!this.isNew) {
        url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/product/${tempProduct.id}`
        httpMethod = 'put'
      }

      this.axios[httpMethod](url, { data: tempProduct })
        .then(res => {
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.productModal.hide()
          this.getProducts()
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
    // 刪除產品
    deleteProduct() {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/product/${this.tempProduct.id}`
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
          this.getProducts()
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
    openModal(status, product) {
      if (status === 'delete') {
        this.tempProduct = { ...product }
        this.deleteModal.show()
      } else if (status === 'edit') {
        this.isNew = false
        this.tempProduct = { ...product }
        this.productModal.show()
      } else if (status === 'new') {
        this.isNew = true
        this.tempProduct = { imagesUrl: [] }
        this.productModal.show()
      }
    }
  },
  mounted() {
    this.getProducts()
    this.deleteModal = new Modal('#deleteModal')
    this.productModal = new Modal('#productModal')
  }
}
</script>
  