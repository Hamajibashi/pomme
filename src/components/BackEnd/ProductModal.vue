<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-primary text-white">
        <h5 id="productModalLabel" class="modal-title">
          <span v-if="isNew">新增產品</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-2">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="product.imageUrl">
              </div>
              <img class="img-fluid" :src="product.imageUrl" alt="產品圖片">
            </div>
            <div>
              <h4>多圖設置</h4>
              <div v-if="Array.isArray(product.imagesUrl)">
                <template v-for="(imageUrl, key) in product.imagesUrl" :key="key+123">
                  <input type="text" class="form-control" v-model="product.imagesUrl[key]">
                  <img class="img-fluid mb-2" :src="product.imagesUrl[key]" alt="產品圖片">
                </template>
                <button type="button" class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="product.imagesUrl.push('')"
                  v-if="!product.imagesUrl.length || product.imagesUrl[product.imagesUrl.length - 1]">
                  新增圖片
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm d-block w-100" @click="product.imagesUrl.pop()"
                  v-else>
                  刪除圖片
                </button>
              </div>
              <div v-else>
                <button type="button" class="btn btn-outline-primary btn-sm d-block w-100" @click="addImages">
                  新增圖片
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="product.title">
            </div>

            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類</label>
                <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="product.category">
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位</label>
                <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="product.unit">
              </div>
            </div>

            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價</label>
                <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價"
                  v-model="product.origin_price">
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價</label>
                <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價" v-model="product.price">
              </div>
            </div>
            <hr>

            <div class="mb-3">
              <label for="description" class="form-label">產品描述</label>
              <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述" v-model="product.content">
                            </textarea>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容"
                v-model="product.description">
                            </textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                  v-model="product.is_enabled">
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-gray" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-primary" @click="$emit('update-product', tempProduct)">
          確認
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempProduct', 'isNew'],
  emits: ['update-product'],
  data() {
    return {
      product: {}
    }
  },
  methods: {
    addImages() {
      this.product.imagesUrl = []
      this.product.imagesUrl.push('')
    }
  },
  watch: {
    tempProduct() {
      this.product = this.tempProduct
    }
  }
}
</script>
