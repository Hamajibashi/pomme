<template>
    <teleport to="title"> | 後台登入</teleport>
    <loading-component :active="isLoading" :z-index="1060"></loading-component>
    <div style="background-image: url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'); height:100vh; background-size: cover; background-position: center center; background-attachment:fixed;"
        class="position-relative">
        <div class="container">
            <div class="text-center">
                <div class="row justify-content-center align-items-center min-vh-100">
                    <div class="bg-primary rounded d-flex flex-column justify-content-center align-items-center shadow"
                        style="width: 500px; height: 600px;" data-aos="zoom-in">
                        <h1 class="h2 mb-4 fw-bold text-light">
                            <span class="logo">Pomme</span><br>後台登入
                        </h1>
                        <div class="col-8">
                            <form id="form" class="form-signin">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="username" placeholder="name@example.com"
                                        required autofocus v-model="user.username">
                                    <label for="username">帳號</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="password" placeholder="Password"
                                        required v-model="user.password">
                                    <label for="password">密碼</label>
                                </div>
                                <button class="btn btn-lg btn-secondary text-light w-100 mt-3" type="button" @click="login">
                                    登入
                                </button>
                                <router-link to="/"
                                    class="btn btn-lg btn-outline-secondary text-light w-100 mt-3">回到前台首頁</router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_BASEURL } = import.meta.env
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            isLoading: false
        }
    },
    methods: {
        login() {
            this.isLoading = true
            const url = `${VITE_BASEURL}/v2/admin/signin`
            this.axios.post(url, this.user)
            .then(res => {
                const { token, expired } = res.data
                document.cookie = `hexschool=${token}; expires=${expired}`
                this.isLoading = false
                this.$router.push('/admin')
            })
            .catch(() => {
                    this.isLoading = false
                    Swal.fire({
                        iconColor: '#992525',
                        iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i>',
                        text: '登入失敗',
                        showConfirmButton: false,
                        width: 250,
                        timer: 1500
                    })
                })
        }
    }
}
</script>

