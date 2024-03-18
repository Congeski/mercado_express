<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import { useEmployeesStore } from '@/stores/EmployeesStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';
import ProductsTable from '@/components/ProductsTable.vue';

const usersStore = useUsersStore();
const employeesStore = useEmployeesStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="true"/>
        <div class="table-container">
            <ProductsTable :employees="employeesStore.employees"/>
            <div class="buttons-container">
                <RouterLink class="link-nostyling" to="/addEmployeeView"><div class="div-button">ADICIONAR FUNCIONARIO</div></RouterLink>
            </div>
        </div>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>
.div-button {
    background: var(--xp-blue);
    color: var(--xp-white);
}

.buttons-container div {
    padding: 10px 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}

.buttons-container {
    display: flex;
    gap: 50px;
}

.table-container {
    margin-top: 40px;
    width: 80%;
    background: var(--xp-cream);
    border-radius: 10px;
}
</style>