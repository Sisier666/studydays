<template>
    <header>
        <h1>{{ title }}</h1>
        <nav>
            <RouterLink to="/">首页</RouterLink>
            <RouterLink to="/projects">项目</RouterLink>
            <RouterLink to="/contact">联系</RouterLink>
        </nav>
        <RouterView></RouterView>
    </header>
</template>

<script setup>
    defineProps({
        title: String
    })
</script>