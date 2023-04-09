<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span v-if="isNew">新增優惠券</span>
          <span v-else>編輯優惠券</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <VeeForm ref="form" v-slot="{ errors }" @submit="$emit('update-coupon', tempCoupon)">
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <VeeField type="text" name="標題" class="form-control" :class="{ 'is-invalid': errors['標題'] }" id="title"
              rules="required" v-model="tempCoupon.title" placeholder="請輸入標題"></VeeField>
            <error-message name="標題" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <VeeField type="text" name="優惠碼" class="form-control" :class="{ 'is-invalid': errors['優惠碼'] }"
              id="coupon_code" rules="required" v-model="tempCoupon.code" placeholder="請輸入優惠碼"></VeeField>
            <error-message name="優惠碼" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <VeeField type="date" name="到期日" class="form-control" :class="{ 'is-invalid': errors['到期日'] }" id="due_date"
              rules="required" v-model="due_date"></VeeField>
            <error-message name="到期日" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <VeeField type="number" name="折扣百分比" class="form-control" :class="{ 'is-invalid': errors['折扣百分比'] }"
              id="price" min="0" max="100" oninput="this.value = Math.abs(this.value)"
              rules="required|max_value:99|min_value:1" v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比">
            </VeeField>
            <error-message name="折扣百分比" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                v-model="tempCoupon.is_enabled" id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-gray" data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary">確認</button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>
<script>

export default {
  props: ['coupon', 'isNew'],
  emits: ['update-coupon'],
  data() {
    return {
      tempCoupon: {},
      due_date: null
    };
  },
  watch: {
    coupon() {
      this.tempCoupon = {
        ...this.coupon,
        is_enabled: this.coupon.is_enabled || 0,
      }
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toLocaleDateString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    }
  }
};
</script>
  