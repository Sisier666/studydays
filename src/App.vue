<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
</script>

<template>
  <Header title="小鱼的前端简历" ></Header>
  <Profile
    avatar="/img/美 (2).jpg"
    intro="面试官好！我是小鱼，来自广州软件学院，2025 届电子与计算机工程专业。"
  ></Profile>
  <Footer email="320349353@qq.com" ></Footer>

</template>

<style scoped>
  nav { margin: 0 8px; color: #007; }
</style>
