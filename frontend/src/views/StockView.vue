<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';

const usersStore = useUsersStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="true"/>
        <h1>Stock</h1>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>

</style>