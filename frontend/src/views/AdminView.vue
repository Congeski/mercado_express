<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';
import HelloUser from '@/components/HelloUser.vue';

const usersStore = useUsersStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="true"/>
        <HelloUser :name="usersStore.currentUser"/>
        <div class="graph-container">
            <img class="graph" src="../assets/grafico-queridometro.png">
            <p class="xp-ptag">Queridômetro</p>
        </div>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>
.info-container {
    display: flex;
    flex-direction: column;
    margin-top: 20vh;
}

.graph-container {
    background: var(--xp-blue-darker);
    padding: 10px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--xp-white);
    font-weight: 700;
    font-size: x-large;
}

.graph {
    object-fit: cover;
    width: 16vw;
}
</style>