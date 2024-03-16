<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';
import CartContainer from '@/components/CartContainer.vue';

const usersStore = useUsersStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :admin="usersStore.admin" :name="usersStore.currentUser"/>
        <CartContainer/>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>

</style>