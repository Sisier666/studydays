<template>
    <section>
        <img :src="avatar" alt="头像" width="120" class="avatar"></img>
        <p>{{ intro }}</p>
    </section>
</template>

<script setup>
    defineProps({
        avatar: String,
        intro: String
    })
</script>

<style scoped>
    .avatar {
        border-radius: 50%;
    }
</style>