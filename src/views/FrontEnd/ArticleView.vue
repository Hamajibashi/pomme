<template>
  <teleport to='title'> | {{ article.title }}</teleport>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <div
    style="background-image: url('https://images.unsplash.com/photo-1506361201900-f4bc8d2e8c2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); height:300px;"
    class="d-flex align-items-center justify-content-center bg-setting">
    <div class="bg-primary p-5 mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <h2 class="h3 mb-0 fw-bold text-light text-center">最新消息</h2>
    </div>
  </div>
  <div class="container-md">
    <div class="py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-decoration-none">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/news" class="text-decoration-none">最新消息</router-link>
          </li>
          <li class="breadcrumb-item fw-bold"><router-link :to="`/news/${id}`" class="text-decoration-none">{{
            article.title }}</router-link></li>
        </ol>
      </nav>
      <div class="d-flex justify-content-center">
        <div class="card bg-transparent border-0 mb-3" data-aos="fade-up" data-aos-duration="800">
          <div class="d-flex mb-2">
            <time class="me-2">{{ $filters.date(article.create_at) }}</time>
            <div class="d-flex">
              <span class="badge bg-primary me-1 fs-7" v-for="tag in article.tag" :key="tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="card-header border-0 rounded-0 bg-primary text-light p-3 mb-2">
            <h3 class="card-title fw-bold mb-0">{{ article.title }}</h3>
          </div>
          <p class="mb-2"><i class="bi bi-pencil-fill me-1"></i>{{ article.author }}</p>
          <div class="d-flex flex-column flex-xl-row align-items-center align-items-xl-start">
            <img :src="article.imageUrl" class="card-img-top img-fluid object-cover rounded-0 mb-3 mb-xl-0"
              :alt="article.title" style="max-width:600px;">
            <div class="card-body py-0 px-4 px-xl-3 d-flex flex-column justify-content-between h-100">
              <div v-html="article.content" class="card-text">
              </div>
              <div class="d-flex justify-content-between border-top pt-2">
                <router-link to="/news" class="float-hover text-decoration-none text-end pt-2"><i
                    class="bi bi-caret-left-fill ms-1"></i>回到最新消息</router-link>
                <ul class="list-unstyled d-flex">
                  <li class="float-hover"><a href="#" class="fs-4 me-3"><i class="bi bi-facebook"></i></a>
                  </li>
                  <li class="float-hover"><a href="#" class="fs-4"><i class="bi bi-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import ArticlesStore from '@/stores/ArticlesStore.js'

export default {
  methods: {
    ...mapActions(ArticlesStore, ['getArticle'])
  },
  computed: {
    ...mapState(ArticlesStore, ['article', 'isLoading'])
  },
  mounted() {
    const { id } = this.$route.params
    this.getArticle(id)
  }
}
</script>
