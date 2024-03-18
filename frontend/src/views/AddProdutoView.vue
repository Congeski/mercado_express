<script setup>
  import { ref } from 'vue';
  import { products } from '../data';
  import { useRouter } from 'vue-router';

  const novoProduto = ref({
    nome: '',
    id: '',
    preco: 0,
    quantidade: 0
  });
  
  const router = useRouter();
  
  const adicionarProduto = () => {
    products.push({
      name: novoProduto.value.nome,
      id: novoProduto.value.id,
      price: novoProduto.value.preco,
      quantity: novoProduto.value.quantidade
    });
    
    novoProduto.value.nome = '';
    novoProduto.value.id = '';
    novoProduto.value.preco = 0;
    novoProduto.value.quantidade = 0;
  
    router.push('/stockView');
  };

  function goBack() {
    router.push('/stockView');
  }
  </script>

<template>
    <div class="page-container">  
      <div class="add-product">
          <h2>Adicionar Produto</h2>
          <div>
            <form @submit.prevent="adicionarProduto" class="product-form">
            <div>
              <label for="nome">Nome </label>  
              <input class="xp-input" type="text" id="nome" v-model="novoProduto.nome">
            </div>
            <div>
              <label for="id">Id </label>  
              <input class="xp-input" type="text" id="id" v-model="novoProduto.id">
            </div>
            <div>
              <label for="preco">Preço </label>
              <input type="number" class="xp-input" id="preco" v-model.number="novoProduto.preco">
            </div>
            <div>
              <label for="quantidade">Quantidade </label>
              <input type="number" class="xp-input" id="quantidade" v-model.number="novoProduto.quantidade">
            </div>
            <div class="buttons-container">
              <button class="div-button" type="submit">Adicionar Produto</button>
              <button class="exit-button" type="reset" @click="goBack">Cancelar</button>
            </div>
          </form>
          </div>
      </div>
    </div>
  </template>
  
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
  </style>
  