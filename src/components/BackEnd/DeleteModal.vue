<template>
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title">
          <span>刪除指定項目</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark">
        確定要刪除<strong class="text-danger">{{ item.title }}</strong>嗎？
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-gray" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-danger" @click="$emit('del-item')">
          確認刪除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  emits: ['del-item']
}
</script>
