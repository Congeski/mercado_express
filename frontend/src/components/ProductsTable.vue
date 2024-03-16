<script setup>
import { defineProps } from 'vue';

defineProps({
    cart: Array
});
</script>

<template>
    <table class="products-table">
        <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Identificador</th>
            <th>Preço un/kg</th>
        </tr>
        <tr v-for="(product, index) in cart" :key="index" class="text-center">
            <td class="text-left">{{ product.name }}</td>
            <td>{{ product.quantity || product.weight }}</td>
            <td>R$ {{ ((product.quantity || product.weight) * product.price).toFixed(2) }}</td>
            <td>{{ product.id }}</td>
            <td>R$ {{ (product.price).toFixed(2) }}</td>
        </tr>
    </table>
</template>

<style scoped>
th {
    background-color: lightgray;
    padding: 5px;
    width: 20%;
    text-align: center;
}

tr:nth-child(even) {
    background-color: #f2f2f2
}

.products-table {
    border: 1px solid;
    margin: 10px;
    width: 98%;
    border-radius: 10px;
}
</style>