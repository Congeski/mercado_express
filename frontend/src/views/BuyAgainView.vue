<template>
    <div class="page-container">
      <div class="add-product">
        <h2 v-if="!sucesso && !produtoNaoEncontrado">Comprar Novamente</h2>
        <div v-if="!sucesso && !produtoNaoEncontrado">
          <form @submit.prevent="adicionarProduto" class="product-form">
            <div>
              <label for="id">ID do Produto</label>
              <input class="xp-input" type="text" id="id" v-model="novoProduto.id">
            </div>
            <div>
              <label for="quantidade">Quantidade</label>
              <input class="xp-input" type="number" id="quantidade" v-model.number="novoProduto.quantidade">
            </div>
            <div class="buttons-container">
              <button class="div-button" type="submit">Comprar Novamente</button>
              <button class="exit-button" type="reset" @click="goBack">Cancelar</button>
            </div>
          </form>
        </div>
        <div v-if="produtoNaoEncontrado">
          <h2>Produto não encontrado.</h2>
          <button class="exit-button center-button" @click="produtoNaoEncontrado = false">OK</button>
        </div>
        <div v-if="produtoInvalido">
          <h2>Quantidade inválida. Insira uma quantidade maior que zero.</h2>
          <button class="exit-button center-button" @click="produtoInvalido = false">OK</button>
        </div>
        <div v-if="sucesso">
          <h2>Produto Adicionado com Sucesso!</h2>
          <button class="exit-button center-button" @click="sucesso = false">OK</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { products } from '../data';
  import { useRouter } from 'vue-router';
  
  const novoProduto = ref({
    id: '',
    quantidade: 0
  });
  
  const router = useRouter();
  const sucesso = ref(false);
  const produtoNaoEncontrado = ref(false);
  const produtoInvalido = ref(false);
  
  const adicionarProduto = () => {
    const quantidade = novoProduto.value.quantidade;
    if (quantidade <= 0) {
      produtoInvalido.value = true;
      return;
    }
  
    const produto = encontrarProdutoPorId(novoProduto.value.id);
    if (produto) {
      produto.quantity += quantidade;
      sucesso.value = true;
      novoProduto.value.id = '';
      novoProduto.value.quantidade = 0;
    } else {
      produtoNaoEncontrado.value = true;
    }
  };
  
  const encontrarProdutoPorId = (productId) => {
    return products.find(product => product.id === productId);
  };
  
  function goBack() {
    router.push('/stockView');
  }
  </script>
  
  <style scoped>
  .buttons-container {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  
  .exit-button {
    margin-left: 10px;
  }
  
  .div-button {
    padding: 3px;
  }
  
  .product-form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  
  .xp-input {
    background: var(--xp-white);
  }
  
  .add-product {
    background: var(--xp-cream);
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .div-button {
    background: var(--xp-blue);
    color: var(--xp-white);
    display: flex;
    gap: 50px;
  }
  
  .stock-container {
    width: 80%;
    background-color: var(--xp-cream);
    border-radius: 10px;
    margin-top: 70px;
  }
  
  .center-button {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  </style>  