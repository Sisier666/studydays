<script setup>
    import { vMotionSlideVisibleOnceBottom } from '@vueuse/motion';

    defineProps({
        avatar: String,
        intro: String
    })
</script>

<template>
    <div v-motion-slide-visible-once-bottom>
        <section>
            <img :src="avatar" alt="头像" width="120" class="avatar"></img>
            <p>{{ intro }}</p>
        </section>
    </div>

</template>

<style scoped>
    .avatar {
        border-radius: 50%;
    }
</style>