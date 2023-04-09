import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_BASEURL, VITE_APIPATH } = import.meta.env

export default defineStore('articlesStore', {
  state: () => ({
    articlesData: [],
    articleData: [],
    page: {},
    loading: false
  }),
  actions: {
    // 取得貼文
    getArticles(page = 1) {
      this.loading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/articles?page=${page}`
      axios.get(url)
        .then(res => {
          this.articlesData = res.data.articles
          this.page = res.data.pagination
          this.loading = false
        })
        .catch(err => {
          this.loading = false
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
    // 取得單一貼文
    getArticle(id) {
      this.loading = true
      const url = `${VITE_BASEURL}/v2/api/${VITE_APIPATH}/article/${id}`
      axios.get(url)
        .then(res => {
          this.articleData = res.data.article
          this.loading = false
        })
        .catch(err => {
          this.loading = false
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
  getters: {
    articles: ({ articlesData }) => {
      return articlesData
    },
    article: ({ articleData }) => {
      return articleData
    },
    pagination: ({ page }) => {
      return page
    },
    isLoading: ({ loading }) => {
      return loading
    }
  }
})