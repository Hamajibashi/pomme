<template>
    <teleport to="title"> | 尋找的頁面不存在</teleport>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center min-vh-100">
            <div class="text-center text-light bg-primary mt-5 mx-auto p-5 rounded shadow-sm" style="width: 600px;"
                data-aos="fade-down" data-aos-duration="600">
                <h1 class="fw-bold mb-5">Oops！尋找的頁面不存在</h1>
                <p class="mb-0 fs-5">在找商品嗎？</p>
                <p class="mb-4 fs-5 mb-5">歡迎來 <span class="logo">Pomme</span> 的線上商店選購！</p>
                <router-link class="btn btn-lg btn-secondary text-light w-100" to="/products">前往線上商店</router-link>
            </div>
        </div>
    </div>
</template>
