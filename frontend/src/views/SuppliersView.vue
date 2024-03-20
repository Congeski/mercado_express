<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import { useProductsStore } from '@/stores/ProductsStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';
import ProductsTable from '@/components/ProductsTable.vue';

const usersStore = useUsersStore();
const productsStore = useProductsStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="true"/>
        <div class="suppliers-table-container">
            <ProductsTable :suppliers="productsStore.registeredSuppliers" :forSuppliers="true"/>
            <div class="buttons-container">
                <RouterLink to="/addSupplierView" class="link-nostyling">
                    <div class="div-button">ADICIONAR FORNECEDOR</div>
                </RouterLink>
            </div>
        </div>
    </div>
    <LoginNeeded v-else/>
</template>

<style scoped>
.buttons-container div {
    padding: 10px 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}

.buttons-container {
    display: flex;
    gap: 50px;
}

.div-button {
    background: var(--xp-blue);
    color: var(--xp-white);
}

.suppliers-table-container {
    margin-top: 40px;
    width: 80%;
    background-color: var(--xp-cream);
    border-radius: 10px;
}
</style>