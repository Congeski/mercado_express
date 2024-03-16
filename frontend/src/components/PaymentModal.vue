<script setup>
import { defineProps, onMounted } from 'vue';

let handleKeyUp;
onMounted(() => {
    handleKeyUp = (event) => {
        if(event.key === "Enter" || event.code === "Enter") {
            emit('confirm');
        }
    };

    window.addEventListener('keyup', handleKeyUp);
});

const emit = defineEmits(['confirm', 'closeModal']);

function closeModal() {
    emit('closeModal');
}

defineProps({
    paymentMethod: String,
    totalValue: Number,
});
</script>

<template>
    <div class="disabling-overlay">
        <div v-if="paymentMethod === 'card'" class="modal-container">
            <div class="title">
                <p class="xp-ptag">INSIRA O CARTÃO</p>
                <div class="exit-button" @click="closeModal">X</div>
            </div>
            <fieldset id="cardMethods" class="payment-methods">
                <div class="card">
                    <input type="radio" name="cardMethods" checked="checked"/>
                    <p class="xp-ptag">Débito</p>
                </div>
                <div class="card">
                    <input type="radio" name="cardMethods"/>
                    <p class="xp-ptag">Crédito</p>
                </div>
                <div class="card">
                    <input type="radio" name="cardMethods"/>
                    <p class="xp-ptag">Alimentação</p>
                </div>
            </fieldset>
            <div class="bottom-text">
                AGUARDE CONFIRMAÇÃO DE SENHA
            </div>
        </div>
        <div v-else-if="paymentMethod === 'money'" class="modal-container">
            <div class="title">
                <p class="xp-ptag">PAGAMENTO EM DINHEIRO</p>
                <div class="exit-button" @click="closeModal">X</div>
            </div>
            <div class="payment-methods">
                Valor total: R$ {{ (totalValue).toFixed(2) }}
            </div>
            <div class="bottom-text">
                AGUARDANDO CONFIRMAÇÃO DA REGISTRADORA
            </div>
        </div>
        <div v-else-if="paymentMethod === 'pix'" class="modal-container">
            <div class="title">
                <p class="xp-ptag">PAGAMENTO VIA PIX</p>
                <div class="exit-button" @click="closeModal">X</div>
            </div>
            <div class="payment-methods">
                <img class="qr-code" src="@/assets/qr-code.png"/>
            </div>
            <div class="bottom-text">
                CHAVE: pixPagamentoExpress@gmail.com
            </div>
        </div>
    </div>
</template>

<style scoped>
.qr-code {
    object-fit: cover;
    width: 60%;
    align-self: center;
}

.exit-button {
    position: fixed;
    right: 5px;
    padding: 0 5px;
}

.disabling-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, .7);
    z-index: 4;
}

.bottom-text {
    background: var(--xp-blue-darker);
    color: var(--xp-white);
    text-align: center;
    padding: 5px 0;
}

.title {
    background: var(--xp-blue-darker);
    color: var(--xp-white);
    font-weight: 700;
    text-align: center;
    padding: 5px 0;
    font-size: large;
    display: flex;
    justify-content: center;
    width: 100%;
}

.payment-methods {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: none;
    padding: 20px 20px;
}

.card {
    display: flex;
    gap: 10px;
}

.modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--xp-white);
    border: 3px solid var(--xp-blue-darker);
    border-radius: 10px;
    width: 30vw;
}
</style>