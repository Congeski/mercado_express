<script setup>
import { defineProps } from 'vue';

defineProps ({
    text: String,
    arrow: Boolean,
    dropdown: Boolean,
})
</script>

<template>
    <div v-if="!dropdown" class="button-arrow">
        {{ text }}
        <svg v-if="arrow" xmlns="http://www.w3.org/2000/svg"  class="arrow" viewBox="0 0 384 512">
            <path fill="var(--xp-white)" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 
            0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 
            64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 
            265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
    </div>
    <div v-else class="button-arrow dropdown">
        {{ text }}
    </div>
</template>

<style scoped>
.dropdown {
    background: var(--xp-blue-hover);
}

.dropdown:hover {
    filter: brightness(1.3);
}

.arrow {
    width: 20px;
    height: 15px;
    margin-left: 5px;
}

.button-arrow {
    color: var(--xp-white);
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px 25px;
    height: 45px;
}

.button-arrow:hover {
    background: var(--xp-blue-hover);
}

.button-arrow:active {
    background: var(--xp-blue-hover);
}
</style>