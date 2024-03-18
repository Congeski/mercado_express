<script setup>
defineProps({
    cart: Array,
    stock: Array,
    suppliers: Array,
    employees: Array,
});
</script>

<template>
    <table v-if="cart" class="products-table">
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
            <td><div class="exit-button table-button">REMOVER</div></td>
        </tr>
    </table>
    <table v-else-if="stock" class="products-table">
        <tr>
            <th>Nome</th>
            <th>Identificador</th>
            <th>Preço un/kg</th>
            <th>Quantidade</th>
        </tr>
        <tr v-for="(product, index) in stock" :key="index" class="text-center table-info">
            <td class="text-left">{{ product.name }}</td>
            <td>{{ product.id }}</td>
            <td>R$ {{ (product.price).toFixed(2) }}</td>
            <td>{{ product.quantity }}</td>
            <td><div class="div-button table-button">EDITAR</div></td>
            <td><div class="exit-button table-button">REMOVER</div></td>
        </tr>
    </table>
    <table v-else-if="suppliers" class="products-table">
        <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>CEP</th>
        </tr>
        <tr v-for="(supplier, index) in suppliers" :key="index" class="text-center">
            <td class="text-left">{{ supplier.name }}</td>
            <td>{{ supplier.cnpj }}</td>
            <td>{{ supplier.cep }}</td>
            <td><div class="div-button table-button">EDITAR</div></td>
            <td><div class="exit-button table-button">REMOVER</div></td>
        </tr>
    </table>
    <table v-else-if="employees" class="products-table">
        <tr>
            <th>Cód.</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>eMail</th>
            <th>Cargo</th>
        </tr>
        <tr v-for="(employee, index) in employees" :key="index" class="text-center">
            <td class="text-left">{{ employee.code }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.cpf }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.role }}</td>
            <td><div class="div-button table-button">EDITAR</div></td>
            <td><div class="exit-button table-button">REMOVER</div></td>
        </tr>
    </table>
</template>

<style scoped>
.table-info {
    max-height: 60vh;
}

.table-button {
    padding: 3px;
}

.div-button {
    background: var(--xp-blue);
    color: var(--xp-white);
}

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
    overflow: auto;
    display: block;
    height: 60vh;
}

.products-table th {
    width: 30%;
}
</style>