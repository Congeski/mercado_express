<script setup>
import UserHeader from '@/components/UserHeader.vue';
import LoginNeeded from '@/components/LoginNeeded.vue';
import HelloUser from '@/components/HelloUser.vue';
import { useUsersStore } from '@/stores/UsersStore.js';
import { RouterLink } from 'vue-router';

const usersStore = useUsersStore();

</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="usersStore.admin"/>
        <div class="left">
            <RouterLink to="/cashierView" class="link-nostyling">
                <div class="div-button user-option">
                    ABRIR CAIXA
                </div>
            </RouterLink>
            <div class="div-button user-option">
                GERAR RELATÓRIO
            </div>
            <RouterLink to="/login" class="link-nostyling">
                <div class="exit-button user-option">
                    SAIR
                </div>
            </RouterLink>
        </div>
        <div class="right">
            <HelloUser :name="usersStore.currentUser" />
            <div class="picture-container">
                <img src="@/assets/default-user.png" />
            </div>
            <div class="location">
                <p class="xp-ptag">Caixa 01</p>
            </div>
        </div>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>
.right {
    padding: 50px;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px;
}

.user-option {
    padding: 15px 40px;
    text-align: center;
}

.page-container {
    flex-direction: row;
}

.location {
    font-size: x-large;
    font-weight: 500;
    color: var(--xp-white);
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>