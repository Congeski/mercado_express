<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useProductsStore } from '@/stores/ProductsStore';
import ProductsTable from './ProductsTable.vue';
import PaymentModal from '@/components/PaymentModal.vue';

let handleKeyUp;
const productsStore = useProductsStore();
const saleStarted = ref(false);
const totalItems = ref(0);
const totalValue = ref(0);
const paymentMethod = ref(null);
const showPaymentModal = ref(false);
const router = useRouter();

onMounted (() => {
    handleKeyUp = (event) => {
        if(event.key === "Enter" || event.code === "Enter") {
            startSale();
        }
    };

    window.addEventListener('keyup', handleKeyUp);
    getItemQuantity();
    getTotalValue();
});

function cancelSale() {
    router.push('sellerView');
}

function finishSale() {
    showPaymentModal.value = false;
    router.push('sellerView');
}

function openPaymentModal() {
    if(!paymentMethod.value) {
        alert("Selecione um método de pagamento");
    } else {
        showPaymentModal.value = true;
    }
}

function startSale() {
    saleStarted.value = true;
}

function getItemQuantity() {
    productsStore.currentCart.forEach(product => {
        totalItems.value += product.quantity ? 
            product.quantity : 1;
    });
}

function getTotalValue() {
    productsStore.currentCart.forEach(product => {
        totalValue.value += (product.quantity || product.weight) * product.price;
    });
}
</script>

<template>
    <div v-if="!saleStarted" class="cart">
        <p class="status xp-ptag">CAIXA LIVRE</p>
        <p class="instructions xp-ptag">
            PARA INICIAR UMA VENDA APERTE ENTER OU
            LEIA UM CÓDIGO DE BARRAS
        </p>
        <RouterLink to="/sellerView">
            <div class="exit-before-start exit-button">
                SAIR
            </div>
        </RouterLink>
    </div>
    <div v-else class="not-empty cart">
        <div class="left-side">
            <div class="total">
                <p class="xp-ptag">ITENS:&nbsp;&nbsp;&nbsp; {{ totalItems }}</p>
            </div>
            <div class="total">
                <p class="xp-ptag">VALOR TOTAL:&nbsp;&nbsp;&nbsp; R$ {{ (totalValue).toFixed(2) }}</p>
            </div>
            <div class="last-product">
                <img class="cart-image" src="@/assets/shopping-cart.png">
            </div>
            <div class="payment-method">
                <fieldset id="payment" class="payment">
                    <div class="method">
                        <input type="radio" value="card" name="payment" v-model="paymentMethod">
                        <p class="xp-ptag">Cartão</p>
                    </div>
                    <div class="method">
                        <input type="radio" value="money" name="payment" v-model="paymentMethod">
                        <p class="xp-ptag">Dinheiro</p>
                    </div>
                    <div class="method">
                        <input type="radio" value="pix" name="payment" v-model="paymentMethod">
                        <p class="xp-ptag">Pix</p>
                    </div>
                </fieldset>
            </div>
            <div class="finish-sale">
                <div class="exit-button cancel" @click="cancelSale">CANCELAR</div>
                <div class="div-button finish" @click="openPaymentModal">FINALIZAR VENDA</div>
            </div>
        </div>
        <div class="table-container">
            <ProductsTable :cart="productsStore.currentCart" :forCart="true"/>
        </div>
    </div>
    <PaymentModal v-if="showPaymentModal" :paymentMethod="paymentMethod"
    @confirm="finishSale" @closeModal="showPaymentModal=false" :totalValue="totalValue"/>
</template>

<style scoped>
.cancel {
    padding: 15px 25px;
}

.finish {
    background-color: var(--xp-blue);
    color: var(--xp-white);
    padding: 15px 25px;
}

.finish-sale {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.method {
    display: flex;
}

.payment {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 10px;
    background: var(--xp-white);
}

.last-product {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--xp-white);
    border-radius: 10px;
}

.cart-image {
    object-fit: cover;
    width: 60%;
}

.total {
    background: var(--xp-blue-darker);
    color: var(--xp-white);
    font-weight: 500;
    padding: 15px 25px;
    border-radius: 10px;
    text-align: center;
}

.left-side {
    width: 28.5%;
    height: 94%;
    margin-left: 1%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.table-container {
    background: var(--xp-white);
    border-radius: 10px;
    width: 68.5%;
    height: 94%;
    margin-right: 1%;
    overflow-y: auto;
    overflow-x: hidden;

}

.not-empty {
    flex-direction: row !important;
    justify-content: space-between !important;
}

.exit-before-start {
    padding: 5px 25px;
    position: fixed;
    right: 4vw;
    bottom: 5vh;
}

.cart {
    background: var(--xp-cream);
    width: 95%;
    height: 80vh;
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}

.instructions {
    font-weight: 500;
    color: var(--xp-blue-darker);
}

.status {
    color: var(--xp-blue-darker);
    font-weight: 700;
    font-size: 10vh;
    display: flex;
    justify-content: center;
}
</style>