<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import { useProductsStore } from '@/stores/ProductsStore';
import LoginNeeded from '@/components/LoginNeeded.vue';
import UserHeader from '@/components/UserHeader.vue';
import ProductsTable from '@/components/ProductsTable.vue';

const productsStore = useProductsStore();
const usersStore = useUsersStore();
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <UserHeader :usernameLetter="usersStore.usernameLetter" :admin="true"/>
        <div class="stock-container">
            <ProductsTable :stock="productsStore.allProducts"/>
            <div class="buttons-container">
                <RouterLink class="link-nostyling" to="/buyAgainView"><div class="div-button">COMPRAR NOVAMENTE</div></RouterLink>
                <RouterLink class="link-nostyling" to="/addProdutoView"><div class="div-button">ADICIONAR PRODUTO</div></RouterLink>
                <RouterLink class="link-nostyling" to="/removeProdutoView"><div class="exit-button">REMOVER PRODUTO</div></RouterLink>
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

.stock-container {
    width: 80%;
    background-color: var(--xp-cream);
    border-radius: 10px;
    margin-top: 30px;
    max-height: 72vh;
}
</style>