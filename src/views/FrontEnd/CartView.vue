<template>
  <teleport to='title'> | 購物車</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container-md">
    <div class="py-5">
      <h3 class="fw-bold mb-3">購物車</h3>
      <div class="row">
        <div class="col">
          <!-- 清空購物車按鈕 -->
          <div class="text-end mb-2" v-show="cart.length !== 0">
            <button class="btn btn-outline-gray" @click="removeAll">清空購物車</button>
          </div>
          <!-- 購物車表格 -->
          <table class="table text-primary" v-if="cart.length !== 0">
            <thead>
              <tr>
                <th class="ps-0 d-sm-none w-100">商品詳細</th>
                <th width="30%" class="ps-0 d-none d-sm-table-cell">商品名稱</th>
                <th width="10%" class="text-center d-none d-sm-table-cell">數量</th>
                <th width="20%" class="text-center d-none d-sm-table-cell">單價</th>
                <th width="20%" class="text-center d-none d-sm-table-cell">小計</th>
                <th width="20%" class="text-end d-none d-sm-table-cell">移除</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom border-top" v-for="item in cart" :key="item.id">
                <!-- 商品名稱 + rwd -->
                <th scope="row" class="px-0 py-4 d-flex align-items-center">
                  <img :src="item.product.imageUrl" :alt="item.product.title" style="width: 72px; height: 72px;"
                    class="object-cover img-fluid">
                  <div class="ms-3">
                    <p class="mb-0 fw-bold d-inline-block">{{ item.product.title }}</p>
                    <div class="d-sm-none">
                      <div class="mb-2">
                        ${{ item.product.price }}
                      </div>
                      <select class="form-select-sm" :disabled="item.id === loadingItem" v-model.number="item.qty"
                        @change="updateItem(item)" style="width:100px; height:30px; font-size:10px;">
                        <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                      </select>
                    </div>
                  </div>
                </th>
                <!-- 商品數量 -->
                <td class="align-middle d-none d-sm-table-cell">
                  <select class="form-select-sm" style="width:100%;" :disabled="item.id === loadingItem"
                    v-model.number="item.qty" @change="updateItem(item)">
                    <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                  </select>
                </td>
                <!-- 商品單價 -->
                <td class="align-middle text-center d-none d-sm-table-cell">
                  <p class="mb-0">NT$ {{ item.product.price }}</p>
                </td>
                <!-- 商品小計 -->
                <td class="align-middle text-center d-none d-sm-table-cell">
                  <p class="mb-0">NT$ {{ item.total }}</p>
                </td>
                <!-- 刪除單一品項 -->
                <td class="align-middle text-end d-none d-sm-table-cell">
                  <button class="btn text-muted" :disabled="item.id === loadingItem" @click="removeItem(item.id)">
                    <i class="bi bi-trash fs-5"></i>
                  </button>
                </td>
                <!-- 刪除單一品項 rwd -->
                <td colspan="4" class="align-middle text-end d-sm-none">
                  <button class="btn text-muted" :disabled="item.id === loadingItem" @click="removeItem(item.id)">
                    <i class="bi bi-trash fs-5"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <!-- 總計金額 -->
            <tfoot>
              <!-- 無使用優惠券 -->
              <tr v-if="total === final_total">
                <td colspan="4">
                  <p class="mb-0 text-end fw-bold">總金額</p>
                </td>
                <td>
                  <p class="mb-0 text-end fw-bold fs-3">NT$ {{ total }}</p>
                </td>
              </tr>
              <!-- 有使用優惠券 -->
              <tr v-if="total > final_total">
                <td colspan="4">
                  <p class="mb-0 text-end text-muted fs-7">總計</p>
                  <p class="mb-0 text-end fw-bold">優惠價</p>
                </td>
                <td class="pt-4">
                  <p class="mb-0 text-end text-muted fs-7">NT$ {{ total }}</p>
                  <p class="mb-0 text-end fw-bold fs-3">NT$ {{ final_total }}</p>
                </td>
              </tr>
            </tfoot>
          </table>
          <!-- 購物車無商品時 -->
          <div class="d-flex flex-column justify-content-center align-items-center my-5" v-else>
            <h4 class="mb-5">
              購物車目前沒有商品哦！
            </h4>
            <router-link to="/products" class="btn btn-primary btn-lg">來去逛逛</router-link>
          </div>
          <!-- 結帳按鈕與優惠券 -->
          <div class="row flex-column flex-sm-row justify-content-center justify-content-md-between align-items-center"
            v-if="cart.length !== 0">
            <div class="col-md-6 mb-3">
              <p class="fs-7 mb-0 text-muted">我們一歲了！輸入 <span class="text-danger">Pomme1Year</span> 享有 8 折優惠</p>
              <div class="input-group">
                <input type="text" class="form-control rounded-0 shadow-none" placeholder="請輸入優惠券代碼"
                  v-model.trim="coupon">
                <div class="input-group-append">
                  <button class="btn btn-primary rounded-0" type="button" @click="useCoupon(coupon)">套用</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 text-end">
              <router-link class="btn btn-lg btn-primary px-5" to="/checkorder">前往結帳</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import CartStore from '../../stores/CartStore.js'
export default {
  data() {
    return {
      coupon: ''
    }
  },
  methods: {
    ...mapActions(CartStore, ['getCart', 'removeItem', 'removeAll', 'updateItem', 'useCoupon'])
  },
  computed: {
    ...mapState(CartStore, ['cart', 'total', 'final_total', 'loadingItem', 'isLoading'])
  },
  mounted() {
    this.getCart()
  }
}
</script>
