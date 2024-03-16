<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="page-container">
        <div class="header">
            <RouterLink class="link-nostyling" to="/login">
                <div class="div-button xp-login">
                    Login
                </div>
            </RouterLink>
        </div>
        <div class="logo-container">
            <img class="logo" src="../assets/mercado-logo.png">
        </div>
    </div>
</template>

<style scoped>
.xp-login {
    margin: 15px 15px 0px 0px;
}

.header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: right;
}

.logo {
    object-fit: cover;
    width: 36vw;
}

.logo-container {
    background-color: inherit;
}
</style>