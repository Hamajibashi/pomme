<template>
  <teleport to='title'> | 最新消息</teleport>
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
      <div class="row">
        <div class="col-lg-6 mb-3" v-for="article in articles" :key="article.title" data-aos="fade-up"
          data-aos-duration="800">
          <router-link :to="`/news/${article.id}`" class="text-decoration-none">
            <div class="card bg-transparent mb-3 border-0 h-100">
              <div class="card-header bg-primary text-light rounded-0">
                <time>{{ $filters.date(article.create_at) }}</time>
              </div>
              <div class="row g-0 align-items-center pt-2">
                <div class="col-md-4">
                  <img :src="article.imageUrl" class="card-img-top rounded-0 img-fluid object-cover img-hover"
                    style="weight:200px; height: 200px;" :alt="article.title">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="d-flex mb-2">
                      <span class="badge bg-primary me-1" v-for="tag in article.tag" :key="tag">
                        {{ tag }}
                      </span>
                    </div>
                    <h5 class="card-title fw-bold">{{ article.title }}</h5>
                    <p class="card-text">{{ article.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
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
    ...mapActions(ArticlesStore, ['getArticles'])
  },
  computed: {
    ...mapState(ArticlesStore, ['articles', 'isLoading'])
  },
  mounted() {
    this.getArticles()
  }
}
</script>