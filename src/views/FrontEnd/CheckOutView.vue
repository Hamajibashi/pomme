<template>
  <teleport to='title' v-if="!order.is_paid"> | 訂單已建立</teleport>
  <teleport to='title' v-else> | 謝謝惠顧</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container-md">
    <div class="py-5">
      <!-- 購物流程 -->
      <div class="mb-5 d-flex flex-column flex-sm-row text-center justify-content-center align-items-center">
        <div class="bg-primary text-light p-3 w-100">
          <span class="fs-7">Step.1</span>
          <p class="mb-0">訂單建立</p>
        </div>
        <i class="bi bi-arrow-right fs-4 mx-2 d-none d-sm-block"></i>
        <i class="bi bi-arrow-down fs-4 mb-2 d-sm-none"></i>
        <div class="text-light p-3 w-100" :class="order.is_paid ? 'bg-primary' : 'bg-secondary'">
          <span class="fs-7">Step.2</span>
          <p class="mb-0">確認結帳</p>
        </div>
        <i class="bi bi-arrow-right fs-4 mx-2 d-none d-sm-block"></i>
        <i class="bi bi-arrow-down fs-4 mb-2 d-sm-none"></i>
        <div class="bg-primary text-light p-3 w-100" :class="order.is_paid ? 'bg-secondary' : 'bg-primary'">
          <span class="fs-7">Step.3</span>
          <p class="mb-0">完成訂單</p>
        </div>
      </div>
      <div class="bg-primary text-secondary fw-bold p-5 text-center mb-3" v-if="!order.is_paid">
        <i class="bi bi-credit-card-fill fs-1"></i>
        <h3 class="text-light mt-3">訂單已建立</h3>
        <h3 class="text-light">請盡速付款</h3>
      </div>
      <div class="bg-primary text-secondary p-5 text-center mb-3" v-else>
        <i class="bi bi-check-circle-fill fs-1"></i>
        <h3 class="fw-bold text-light mt-3 mb-2">付款成功</h3>
        <p class="text-light mb-0">謝謝您的光臨！</p>
        <p class="text-light mb-2">商品將於 3 天內寄出，請留意包裹訊息</p>
        <div class="d-flex flex-column flex-md-row justify-content-center">
          <router-link to="/menu" class="btn btn-outline-secondary text-light mx-2 mb-2 mb-md-0">看看菜單</router-link>
          <router-link to="/products" class="btn btn-secondary text-light mx-2">繼續選購</router-link>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <!-- 訂單明細 -->
        <div class="col-lg-5">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-3">訂單明細</h4>
            <table class="table mt-4 text-primary">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 ">付款狀態</th>
                  <td class="text-end border-0 h4 fw-bold text-danger" v-if="!order.is_paid">尚未付款</td>
                  <td class="text-end border-0 h4 fw-bold" v-else>已付款</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">訂單編號</th>
                  <td class="text-end border-0">{{ order.id }}</td>
                </tr>
                <tr class="border-bottom">
                  <th scope="row" class="border-0 ">訂購時間</th>
                  <td class="text-end border-0">{{ $filters.date(order.create_at) }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 ">姓名</th>
                  <td class="text-end border-0">{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 ">Email</th>
                  <td class="text-end border-0">{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">地址</th>
                  <td class="text-end border-0">{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">留言</th>
                  <td class="border-0 text-end text-break" width="70%" v-if="order.message">{{ order.message }}</td>
                  <td class="text-end border-0 text-muted" v-else>（空白）</td>
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-lg btn-primary w-100" @click="payOrder" :disabled="order.is_paid">
              付款
            </button>
          </div>
        </div>
        <!-- 購物車明細 -->
        <div class="col-lg-7">
          <table class="table text-primary">
            <!-- 表格頭 -->
            <thead>
              <tr>
                <th class="ps-0">商品名稱</th>
                <th class="d-none d-md-table-cell" width="20%">數量</th>
                <th class="d-none d-md-table-cell" width="20%">單價</th>
                <th class="d-none d-md-table-cell text-end" width="20%">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom border-top" v-for="item in order.products" :key="item.id">
                <!-- 商品圖片與商品名稱 -->
                <th scope="row" class="border-0 px-0 py-4 d-flex align-items-center">
                  <img :src="item.product.imageUrl" :alt="item.product.title" class="object-cover img-fluid"
                    style="width: 72px; height: 72px;">
                  <div class="ms-3">
                    <p class="mb-2 fw-bold">{{ item.product.title }}</p>
                    <div class="d-md-none">
                      <div class="mb-2">
                        ${{ item.total }}
                      </div>
                      <span class="text-start">數量：{{ item.qty }}</span>
                    </div>
                  </div>
                </th>
                <!-- 商品數量 -->
                <td class="border-0 align-middle d-none d-md-table-cell">
                  <p class="mb-0 fw-bold">{{ item.qty }}</p>
                </td>
                <!-- 商品價格 -->
                <td class="border-0 align-middle d-none d-md-table-cell">
                  <p class="mb-0 pe-5">NT$ {{ $filters.currency(item.product.price) }}</p>
                </td>
                <!-- 商品總額 -->
                <td class="border-0 align-middle d-none d-md-table-cell text-end">
                  <p class="mb-0 pe-2">NT$ {{ $filters.currency(item.total) }}</p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="text-end fw-bold">
                <td colspan="2">總金額</td>
                <td colspan="2" class="fs-3">NT$ {{ $filters.currency(order.total) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env
export default {
  data() {
    return {
      order: {
        products: {},
        user: {}
      },
      id: '',
      isLoading: false
    }
  },
  methods: {
    // 取得訂單
    getOrder() {
      this.isLoading = true
      this.id = this.$route.params.id
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/order/${this.id}`
      this.axios.get(url)
        .then(res => {
          this.order = res.data.order
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
    // 付款
    payOrder() {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/pay/${this.id}`
      this.axios.post(url)
        .then(res => {
          this.getOrder()
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
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
    }
  },
  mounted() {
    this.getOrder()
  }
}
</script>