<script setup>
import { employees, products, suppliers } from '../data';
import { getCurrentInstance, onMounted } from 'vue';
import { useProductsStore } from '@/stores/ProductsStore';

const instance = getCurrentInstance();
const productsStore = useProductsStore();


// function removeEmployee(employeeIndex) {
//     employees.splice(employeeIndex, 1);

//     instance?.proxy?.$forceUpdate();    
// }

// function removeProductFromStock(productId) {
//     products.forEach(product => {
//         if (product.id === productId) {
//             products.pop(product);
//         }
//     });
    
//     instance?.proxy?.$forceUpdate();
// }

// function removeSupplier(cnpj) {
//     suppliers.forEach(supplier => {
//         if (supplier.cnpj === cnpj) {
//             suppliers.pop(supplier);
//         }
//     });

//     instance?.proxy?.$forceUpdate();
// }

function removeFrom(where, index) {
    where.splice(index, 1);

    instance?.proxy?.$forceUpdate();
}

function removeFromCart(index) {
    productsStore.removeProductFromCart(index);
}

defineProps({
    cart: Array,
    forCart: { type: Boolean, default: false },
    stock: Array,
    forStock: { type: Boolean, default: false },
    suppliers: Array,
    forSuppliers: { type: Boolean, default: false },
    employees: Array,
    forEmployees: { type: Boolean, default: false },

});

onMounted(() => {
    
})
</script>

<template>
    <table v-if="forCart" class="products-table">
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
            <td><div class="exit-button table-button" @click="removeFromCart(index)">REMOVER</div></td>
        </tr>
    </table>
    <table v-if="forStock" class="products-table">
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
            <td><div class="exit-button table-button" @click="removeFrom(products, index)" >REMOVER</div></td>
        </tr>
    </table>
    <table v-if="forSuppliers" class="products-table">
        <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>CEP</th>
        </tr>
        <tr v-for="(supplier, index) in suppliers" :key="index" class="text-center">
            <td class="text-left">{{ supplier.name }}</td>
            <td>{{ supplier.cnpj }}</td>
            <td>{{ supplier.cep }}</td>
            <td><div class="exit-button table-button" @click="removeFrom(suppliers, index)">REMOVER</div></td>
        </tr>
    </table>
    <table v-if="forEmployees" class="products-table">
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
            <td><div class="exit-button table-button" @click="removeFrom(employees, index)" >REMOVER</div></td>
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
    width: 35%;
}
</style>