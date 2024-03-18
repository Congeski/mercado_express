<script setup>

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
        <h1 class="warning">Usuário não identificado</h1>
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

.warning {
    color: var(--xp-cream);
}
</style>