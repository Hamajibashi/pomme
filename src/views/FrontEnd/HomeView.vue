<template>
  <loading-component :active="isLoading" :z-index="1060"></loading-component>
  <!-- HeroHeader -->
  <header>
    <div
      style="background-image: url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'); height:85vh;"
      class="position-relative d-flex flex-column justify-content-center align-items-start bg-setting" data-aos="fade-up"
      data-aos-duration="800">
      <div class="bg-primary py-5 px-4 p-sm-5 mx-auto text-center" style="max-width: 450px;" data-aos="fade-up"
        data-aos-delay="200" data-aos-duration="800">
        <h2 class="h4 fw-bold text-light">用咖啡、點心和陶藝</h2>
        <h2 class="h4 fw-bold text-light mb-4">為你打造獨一無二的生活風格</h2>
        <router-link to="/products" class="btn btn-lg btn-secondary text-light">逛逛線上商店</router-link>
      </div>
    </div>
  </header>
  <!-- 優惠活動 -->
  <section>
    <div class="bg-primary text-white py-6">
      <div class="container-md" data-aos="zoom-in" data-aos-duration="800">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <h3 class="fw-bold mb-3 open d-flex justify-content-center align-items-center">我們一歲了</h3>
            <p class="mb-2">限時優惠活動開跑！</p>
            <p class="mb-2">來店打卡送蛋糕</p>
            <p class="mb-4">再送您線上商店 8 折優惠券代碼 <span class="text-secondary">Pomme1Year</span></p>
            <router-link to="/products" class="btn btn-lg btn-secondary text-light">來去逛逛</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 最新消息 -->
  <section>
    <div class="py-7">
      <div class="container-md">
        <div class="d-flex flex-column align-items-center">
          <h2 class="title-goldline fw-bold mb-6 text-center" data-aos="fade-up" data-aos-duration="800">最新消息</h2>
        </div>
        <div class="row position-relative news">
          <div class="col-md-7 mb-3 mb-md-0" data-aos="fade-up" data-aos-duration="800">
            <router-link :to="`/news/${articles[0]?.id}`" class="text-light text-decoration-none">
              <div class="ratio ratio-4x3">
                <div class="overflow-hidden mb-3" style="max-width:800px; max-height:600px;">
                  <img :src="articles[0]?.imageUrl" :alt="articles[0]?.title"
                    class="object-cover object-center w-100 h-100 img-fluid">
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-6" data-aos="fade-up" data-aos-duration="800">
            <router-link :to="`/news/${articles[0]?.id}`" class="text-decoration-none">
              <div class="bg-primary text-light p-3 p-lg-4 float-hover">
                <time class="fs-5 fw-bold">{{ $filters.date(articles[0]?.create_at) }}</time>
                <div class="d-flex mb-3">
                  <span class="badge bg-secondary me-1 fs-7" v-for="tag in articles[0]?.tag" :key="tag">
                    {{ tag }}
                  </span>
                </div>
                <h3 class="fs-4 fw-bold mb-3">{{ articles[0]?.title }}</h3>
                <h4 class="fs-5 mb-3 mb-lg-5">{{ articles[0]?.description }}</h4>
                <div class="d-flex justify-content-end float-hover">
                  <router-link :to="`/news/${articles[0]?.id}`" class="text-light text-decoration-none">
                    閱讀詳情<i class="bi bi-caret-right-fill"></i>
                  </router-link>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 關於我們 -->
  <section class="bg-primary text-light">
    <div class="container-md py-7 d-flex flex-column align-items-center">
      <h2 class="title-goldline fw-bold mb-6" data-aos="fade-up" data-aos-duration="800">關於我們</h2>
      <h3 class="fs-6" data-aos="fade-up" data-aos-duration="800">Pomme 咖啡是一個由三個女生朋友共同創立的咖啡店</h3>
      <h3 class="fs-6 mb-5" data-aos="fade-up" data-aos-duration="800">我們專注於為顧客提供高品質的咖啡、點心和陶藝體驗，同時致力於打造一個舒適和溫馨的咖啡店環境</h3>
      <div class="row text-primary">
        <div class="col-md-4 mt-md-4" data-aos="fade-up" data-aos-duration="800">
          <div class="card border-0 rounded-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80"
              class="card-img-top rounded-0 object-cover" height="300" alt="Pomme 的咖啡" />
            <div class="card-body text-center px-4">
              <h4 class="fw-bold">咖啡</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-start mb-0">
                  我們使用高品質的咖啡豆，並且堅持手工烘焙，確保每一杯咖啡都帶有最佳風味和香氣。線上商店也有販售我們的特調，讓您在自己家也可以享受 Pomme 的香醇，品味生活
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4" data-aos="fade-up" data-aos-duration="800">
          <div class="card border-0 rounded-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1583743089695-4b816a340f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="card-img-top rounded-0 object-cover" height="300" alt="Pomme 的餅乾" />
            <div class="card-body text-center px-4">
              <h4 class="fw-bold">手工甜點</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-start mb-0">
                  我們的甜點是由優質食材製作而成，並且是每天新鮮出爐。我們擅長製作各式甜點，從起司蛋糕到水果鬆餅，每一個都帶有獨特的風味和美味，甜美風味滿足您的味蕾
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4" data-aos="fade-up" data-aos-duration="800">
          <div class="card border-0 rounded-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              class="card-img-top rounded-0 object-cover" height="300" alt="Pomme 的陶藝" />
            <div class="card-body text-center px-4">
              <h4 class="fw-bold">手作陶藝</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-start mb-0">
                  店內食器皆為我們的陶藝作品，每一個都經過精心的設計和製作，每一個都是世界上獨一無二的陶器。另外我們也提供線上購買，讓您在家也可以營造如同身在 Pomme 的氣氛
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 特色介紹 -->
  <section>
    <div class="container-md py-7">
      <div class="d-flex flex-column align-items-center">
        <h2 class="title-goldline fw-bold mb-6 text-center" data-aos="fade-up" data-aos-duration="800">我們的堅持</h2>
        <div class="row" data-aos="fade-up" data-aos-duration="800">
          <div class="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1567941723610-db0bcb4cca67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Pomme 的食物" class="img-fluid object-cover mb-3">
          </div>
          <div class="col-md-4 m-auto">
            <h3 class="h4 fw-bold">
              品質、創意和熱情
            </h3>
            <p>我們相信，只有提供高品質的產品和服務，才能贏得顧客的信任和支持。同時，我們也非常重視創新和創意，不斷嘗試新的咖啡、點心和陶藝製作方式，為顧客帶來更多驚喜和美味
            </p>
          </div>
        </div>
        <div class="row flex-row-reverse justify-content-between mt-4" data-aos="fade-up" data-aos-duration="800">
          <div class="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Pomme 的咖啡" class="img-fluid object-cover mb-3">
          </div>
          <div class="col-md-4 m-auto">
            <h3 class="h4 fw-bold">
              只提供最好的
            </h3>
            <p>嚴選咖啡豆和食材，並且堅持手工烘焙咖啡和手工製作甜點。同時，我們的陶藝作品也是獨一無二的，因為每一件都是我們親手打造。我們希望讓每一位客人都能夠在 Pomme 咖啡享受到優質的咖啡、美味的甜點和獨特的陶藝體驗
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
