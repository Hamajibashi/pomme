<template>
    <teleport to='title'> | 交通方式</teleport>
    <loading-component :active="isLoading" :z-index="1060"></loading-component>
    <div style="background-image: url('https://images.unsplash.com/photo-1561397999-fac86d278009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'); height:300px; background-size:cover; background-position:center center; background-attachment:fixed;"
        class="d-flex align-items-center justify-content-center">
        <div class="bg-primary p-5 mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <h2 class="h3 mb-0 fw-bold text-light text-center">交通方式</h2>
        </div>
    </div>
    <div class="container-md">
        <div class="py-5">
            <div class="row">
                <div class="d-flex flex-column flex-xl-row justify-content-between align-items-center">
                    <div class="col-12 col-xl-8" data-aos="fade-up" data-aos-duration="800">
                        <div style="border: 3px solid #004c34; box-shadow: 5px 5px 0 #004c34;"
                            class="mb-5 mb-xl-0 me-0 me-xl-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.1781977330807!2d120.28209480612072!3d22.622032468179288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04765b1f322d%3A0x217bf771fb2a900c!2zODAz6auY6ZuE5biC6bm95Z-V5Y2A5YWs5ZyS5LqM6LevMTY26Jmf!5e0!3m2!1szh-TW!2stw!4v1678795426986!5m2!1szh-TW!2stw"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                style="width: 100%; aspect-ratio: 16/9;"></iframe>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4" data-aos="fade-up" data-aos-duration="800">
                        <div class="d-flex flex-column flex-md-row flex-xl-column justify-content-between gap-3">
                            <div class="mb-xl-5 w-100">
                                <h3 class="h4 mb-3 px-4 py-2 text-center bg-primary text-light">搭乘高雄捷運</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        高雄捷運鹽埕埔站 1 號出口步行 3 分鐘
                                    </li>
                                    <li class="mb-2">
                                        高雄捷運西子灣站 2 號出口步行 12 分鐘
                                    </li>
                                </ul>
                            </div>
                            <div class="w-100">
                                <h3 class="h4 mb-3 px-4 py-2 text-center bg-primary text-light">搭乘高雄輕軌</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        高雄輕軌駁二蓬萊站步行 4 分鐘
                                    </li>
                                    <li class="mb-2">
                                        高雄輕軌駁二大義站步行 8 分鐘
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
export default {
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        this.isLoading = false
    }
}
</script>
