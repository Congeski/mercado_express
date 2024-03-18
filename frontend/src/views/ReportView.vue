<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';

const usersStore = useUsersStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :admin="usersStore.admin" :name="usersStore.currentUser"/>
        <div class="data-container">
            <div class="info-container">
                <div class="info">
                    <p class="xp-ptag">19/02/2024 - 8 VENDAS REALIZADAS</p>
                    <p class="xp-ptag">TOTAL: R$ 1.345,87</p>
                </div>
                <div class="info">
                    <p class="xp-ptag">20/02/2024 - 10 VENDAS REALIZADAS</p>
                    <p class="xp-ptag">TOTAL: R$ 4.544,55</p>
                </div>
                <div class="info">
                    <p class="xp-ptag">21/02/2024 - 45 VENDAS REALIZADAS</p>
                    <p class="xp-ptag">TOTAL: R$ 65.565,87</p>
                </div>
                <div class="info">
                    <p class="xp-ptag">22/02/2024 - 102 VENDAS REALIZADAS</p>
                    <p class="xp-ptag">TOTAL: R$ 120.345,87</p>
                </div>
            </div>
            <div class="buttons-container">
                <div class="div-button report-button">GERAR RELATÓRIO</div>
                <RouterLink to="/sellerView" class="link-nostyling">
                    <div class="exit-button report-button">CANCELAR</div>
                </RouterLink>
            </div>
        </div>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>
.div-button {
    color: var(--xp-white);
    background: var(--xp-blue);
}

.report-button {
    padding: 3px;
}

.data-container {
    background: var(--xp-cream);
    border-radius: 10px;
    height: 70vh;
    margin-top: 40px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.buttons-container {
    display: flex;
    justify-content: right;
    margin: 0 10px 10px 0;
    gap: 20px;
}

.info {
    margin-top: 30px;
}

.info-container {
    padding-left: 50px;
}
</style>