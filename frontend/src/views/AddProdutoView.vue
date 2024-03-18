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
  </script>

<template>
    <div class="page-container">  
      <h2>Adicionar Produto</h2>
      <div stock-container>
        <form @submit.prevent="adicionarProduto">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="novoProduto.nome">
        </div>
        <div>
          <label for="id">ID:</label>
          <input type="text" id="id" v-model="novoProduto.id">
        </div>
        <div>
          <label for="preco">Preço:</label>
          <input type="number" id="preco" v-model.number="novoProduto.preco">
        </div>
        <div>
          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" v-model.number="novoProduto.quantidade">
        </div>
        <div>
          <button class="div-button" type="submit">Adicionar Produto</button>
        </div>
      </form>
      </div>
    </div>
  </template>
  
  <style scoped>
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
  