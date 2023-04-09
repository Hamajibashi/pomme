<template>
  <teleport to="title"> | 後台首頁</teleport>
  <div
    style="background-image: url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'); height:100vh; background-size: cover; background-position: center center;"
    class="position-relative">
    <div class="container-fluid">
      <div class="text-center">
        <div class="row justify-content-center align-items-center min-vh-100">
          <div class="bg-primary rounded d-flex flex-column justify-content-center align-items-center shadow"
            style="width: 500px; height: 600px;" data-aos="zoom-in">
            <h1 class="h2 mb-5 fw-bold text-light">
              <span class="logo">Pomme</span> 後台管理
            </h1>
            <p class="text-light h2 mb-5">{{ greeting }}</p>
            <p class="text-light mb-2">現在時間是</p>
            <p class="text-light h2">{{ currentTime }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: ''
    }
  },
  computed: {
    greeting() {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) {
        return '早安☀️'
      } else if (hour >= 12 && hour < 18) {
        return '午安☀️'
      } else {
        return '晚安🌜'
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString()
    }, 1000)
  },
}
</script>