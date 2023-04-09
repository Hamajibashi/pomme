<template>
  <teleport to='title'> | 文章管理</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div class="container p-5">
    <div class="d-flex justify-content-between mb-4">
      <h1 class="h2 fw-bold">文章管理</h1>
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ new Date(article.create_at * 1000).toLocaleDateString() }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button" @click="getArticle(article.id)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" type="button" @click="openModal('delete', article)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <pagination-component @emit-pages="getArticles" :pages="pagination" />
    <!-- 文章 Modal -->
    <div id="articleModal" ref="articleModal" class="modal fade" tabindex="-1" aria-labelledby="articleModalLabel"
      aria-hidden="true">
      <article-modal :is-new="isNew" :article="tempArticle" @update-article="updateArticle" />
    </div>
    <!-- 刪除 Modal -->
    <div id="deleteModal" ref="deleteModal" class="modal fade" tabindex="-1" aria-labelledby="deleteModalLabel"
      aria-hidden="true">
      <delete-modal :item="tempArticle" @del-item="deleteArticle" />
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import PaginationComponent from '@/components/FrontEnd/PaginationComponent.vue'
import DeleteModal from '@/components/BackEnd/DeleteModal.vue'
import ArticleModal from '@/components/BackEnd/ArticleModal.vue'

const { VITE_BASEURL, VITE_APIPATH } = import.meta.env

export default {
  components: {
    PaginationComponent,
    DeleteModal,
    ArticleModal
  },
  data() {
    return {
      articles: [],
      article: {},
      tempArticle: {},
      pagination: {},
      isNew: true,
      isLoading: false,
      deleteModal: null,
      articleModal: null
    }
  },
  methods: {
    // 取得文章
    getArticles(page = 1) {
      this.isLoading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/articles?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
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
    // 取得單篇文章
    getArticle(id) {
      this.isLoading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/article/${id}`
      this.axios.get(url)
        .then(res => {
          this.openModal('edit', res.data.article)
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
    // 新增或編輯文章
    updateArticle(tempArticle) {
      // 預設為新增產品
      let url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/article`
      let httpMethod = 'post'

      // 當 isNew 為 false 時 = 編輯產品時
      if (!this.isNew) {
        url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/article/${tempArticle.id}`
        httpMethod = 'put'
      }

      this.axios[httpMethod](url, { data: tempArticle })
        .then(res => {
          Swal.fire({
            iconColor: '#004c34',
            iconHtml: '<i class="bi bi-check-circle-fill"></i>',
            text: `${res.data.message}`,
            showConfirmButton: false,
            width: 250,
            timer: 1200
          })
          this.articleModal.hide()
          this.getArticles()
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
    // 刪除文章
    deleteArticle() {
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/admin/article/${this.tempArticle.id}`
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
          this.getArticles()
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
    openModal(status, article) {
      if (status === 'delete') {
        this.tempArticle = { ...article }
        this.deleteModal.show()
      } else if (status === 'edit') {
        this.isNew = false
        this.tempArticle = { ...article }
        this.articleModal.show()
      } else if (status === 'new') {
        this.isNew = true
        this.tempArticle = {}
        this.articleModal.show()
      }
    }
  },
  mounted() {
    this.getArticles()
    this.deleteModal = new Modal('#deleteModal')
    this.articleModal = new Modal('#articleModal')
  }
}
</script>
  