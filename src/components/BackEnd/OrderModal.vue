<template>
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="orderModal">
          <span>訂單細節</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-4">
            <h3>用戶資料</h3>
            <table class="table">
              <tbody v-if="order.user">
                <tr>
                  <th style="width: 100px">姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>留言</th>
                  <td>{{ order.message }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-8">
            <h3>訂單細節</h3>
            <table class="table">
              <tbody>
                <tr>
                  <th style="width: 100px">訂單編號</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <th>下單時間</th>
                  <td>{{ $filters.date(order.create_at) }}</td>
                </tr>
                <tr>
                  <th>付款時間</th>
                  <td>
                    <span v-if="order.paid_date">
                      {{ $filters.date(order.paid_date) }}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <strong v-if="order.is_paid" class="text-success">已付款</strong>
                    <span v-else class="text-muted">未付款</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>選購商品</h3>
            <table class="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <th>
                    {{ item.product.title }}
                  </th>
                  <td>{{ item.qty }} / {{ item.product.unit }}</td>
                  <td class="text-end">
                    {{ item.final_total }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-end">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="flexCheckDefault" v-model="order.is_paid">
                <label class="form-check-label" for="flexCheckDefault">
                  <span v-if="order.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-gray" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-primary" @click="updateOrder">
          修改付款狀態
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempOrder', 'updateOrder'],
  data() {
    return {
      order: {},
      isPaid: false
    }
  },
  watch: {
    tempOrder() {
      this.order = this.tempOrder
    }
  }
}
</script>
