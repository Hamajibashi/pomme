<template>
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span v-if="isNew">新增貼文</span>
          <span v-else>編輯貼文</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempArticle.title" placeholder="請輸入標題" />
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">輸入圖片網址</label>
              <input type="text" class="form-control" id="image" v-model="tempArticle.imageUrl" placeholder="請輸入圖片連結" />
            </div>
            <div class="mb-3">
              <label for="author" class="form-label">作者</label>
              <input type="text" class="form-control" id="author" v-model="tempArticle.author" placeholder="請輸入標題" />
            </div>
            <div class="mb-3">
              <label for="create_date">文章建立日期</label>
              <input type="date" class="form-control" id="create_date" v-model="create_date" />
            </div>
          </div>
          <div class="col-sm-8">
            <label for="tag" class="form-label">標籤</label>
            <div class="row gx-1 mb-3">
              <div class="col-md-2 mb-1" v-for="(label, key) in tempArticle.tag" :key="key">
                <div class="input-group input-group-sm">
                  <input type="text" class="form-control form-control" id="tag" v-model="tempArticle.tag[key]"
                    placeholder="請輸入標籤" />
                  <button type="button" class="btn btn-outline-danger" @click="tempArticle.tag.splice(key, 1)">
                    <i class="bi bi-x"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-2 mb-1" v-if="
                tempArticle.tag[tempArticle.tag.length - 1] ||
                !tempArticle.tag.length
              ">
                <button class="btn btn-outline-primary btn-sm d-block w-100" type="button"
                  @click="tempArticle.tag.push('')">
                  新增標籤
                </button>
              </div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">文章描述</label>
              <textarea type="text" class="form-control" id="description" v-model="tempArticle.description"
                placeholder="請輸入文章描述"></textarea>
            </div>
            <div class="mb-3">
              <ckeditor :editor="editor" :config="editorConfig" v-model="tempArticle.content"></ckeditor>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="tempArticle.isPublic" id="isPublic" />
                <label class="form-check-label" for="isPublic">
                  是否公開
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
        <button type="button" class="btn btn-primary" @click="$emit('update-article', tempArticle)">
          確認
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  props: ['article', 'isNew'],
  emits: ['update-article'],
  data() {
    return {
      tempArticle: {
        tag: [''],
      },
      create_date: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic', '|', 'link'],
      },
    }
  },
  watch: {
    article() {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false,
      };
      this.create_date = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T')[0];
    },
    create_date() {
      this.tempArticle.create_at = new Date(this.create_date).getTime() / 1000;
    }
  }
}
</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
  