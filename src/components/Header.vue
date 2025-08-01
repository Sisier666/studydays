<script setup>
    defineProps({
        title: String
    })

    import { useThemeStore } from '@/stores/theme';
    const theme = useThemeStore()
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <button @click="theme.toggle">{{ theme.dark ? '☀' : '🌙' }}</button>
        <nav>
            <RouterLink to="/">首页</RouterLink>
            <RouterLink to="/projects">项目</RouterLink>
            <RouterLink to="/contact">联系</RouterLink>
        </nav>
        <RouterView></RouterView>
    </header>
</template>
