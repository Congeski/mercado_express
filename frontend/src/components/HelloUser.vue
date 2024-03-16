<script setup>
import { defineProps } from 'vue';

defineProps({
    name: String,
});
</script>

<template>
    <div class="hello-welcome">
        <p class="hello xp-ptag">Olá, {{ name }}</p>
        <p class="welcome xp-ptag">Seja bem-vindo</p>
    </div>
</template>

<style scoped>
.hello-welcome {
    font-weight: 700;
    color: var(--xp-white);
    font-size: xx-large;
    margin-bottom: 30px;
}
</style>