<script setup>
    import { useThemeStore } from '@/stores/theme';
    const theme = useThemeStore()

    defineProps({
        title: String
    })
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <button @click="theme.toggle">{{ theme.isDark ? '☀' : '🌙' }}</button>
        <p>当前模式：{{ theme.isDark ? '暗黑' : '亮色' }}</p>
        <nav>
            <RouterLink to="/">首页</RouterLink>
            <RouterLink to="/projects">项目</RouterLink>
            <RouterLink to="/contact">联系</RouterLink>
        </nav>
        <RouterView></RouterView>
    </header>
</template>
