<template>
    <footer>
        <p>{{ email }}</p>
    </footer>
</template>

<script setup>
    defineProps({
        email: String
    })
</script>