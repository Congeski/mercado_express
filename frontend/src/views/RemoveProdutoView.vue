<template>
    <div class="page-container">
      <div class="form-container">
          <h2>Remover Produto</h2>
          <form @submit.prevent="removerProduto" class="form-itself">
            <div>
              <label for="produtoId">ID do Produto </label>
              <input class="xp-input" type="text" id="produtoId" v-model="produtoId">
            </div>
            <div>
              <button type="submit" class="exit-button">Remover Produto</button>
              <button type="reset" class="div-button" @click="goBack">Voltar</button>
            </div>
          </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { products } from '../data'; 
  import { useRouter } from 'vue-router';
  
  const produtoId = ref('');
  const router = useRouter(); 
  
    function goBack () {
        router.push('stockView');
    }

  const removerProduto = () => {
    const index = products.findIndex(prod => prod.id === produtoId.value);
    
    if (index !== -1) {
      products.splice(index, 1);
      produtoId.value = '';
      router.push('/stockView');
    } else {
      alert('Produto não encontrado!');
    }
  };
  </script>
  
  <style scoped>
    .div-button {
        background: var(--xp-blue);
        color: var(--xp-white);
        padding: 3px;
        margin-left: 10px;
    }

    .xp-input {
        background: var(--xp-white);
    }

    .exit-button {
        padding: 3px;
        margin-top: 10px;
    }

    .form-itself {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .form-container {
        background: var(--xp-cream);
        border-radius: 10px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  </style>
  