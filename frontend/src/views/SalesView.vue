<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';

const usersStore = useUsersStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="true"/>
        <div class="grid-container">
            <div class="row">
                <div class="item">
                    <p class="xp-ptag info period">22/01/2023 - 22/01/2024</p>
                    <p class="xp-ptag info large">FATURAMENTO ATUAL</p>
                    <p class="xp-ptag info large">R$259,632,02</p>
                </div>
                <div class="item">
                    <img class="graph" src="@/assets/growth-graph.png"/>
                    <p class="xp-ptag info">CRESCIMENTO MÊS ANTERIOR</p>
                </div>
            </div>
            <div class="row">
                <div class="item large">
                    <p class="xp-ptag info">CAIXAS ABERTOS</p>
                    <p class="xp-ptag info">16/24</p>
                </div>
                <div class="item">
                    <img class="graph" src="@/assets/credit-graph.png"/>
                    <p class="xp-ptag info">CARTÃO DE CRÉDITO</p>
                </div>
            </div>
        </div>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>
.period {
    margin-bottom: 30px;
}

.large {
    font-size: x-large;
}

.info {
    font-weight: 500;
    color: var(--xp-white);
}

.graph {
    object-fit: cover;
    height: 23vh;
    margin-bottom: 15px;
}

.item {
    height: 35vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--xp-blue-darker);
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.grid-container {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>