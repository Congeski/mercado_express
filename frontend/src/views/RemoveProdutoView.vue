<template>
    <div>
      <h2>Remover Produto</h2>
      <form @submit.prevent="removerProduto">
        <div>
          <label for="produtoId">ID do Produto:</label>
          <input type="text" id="produtoId" v-model="produtoId">
        </div>
        <div>
          <button type="submit">Remover Produto</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { products } from '../data'; // Importa a lista de produtos
  import { useRouter } from 'vue-router'; // Importa o hook useRouter do Vue Router
  
  const produtoId = ref('');
  const router = useRouter(); // Obtém o objeto router
  
  const removerProduto = () => {
    // Encontra o índice do produto na lista de produtos
    const index = products.findIndex(prod => prod.id === produtoId.value);
    
    if (index !== -1) {
      // Remove o produto da lista de produtos
      products.splice(index, 1);
      
      // Limpa o campo do formulário após remover o produto
      produtoId.value = '';
  
      // Navega de volta para a página StockView.vue
      router.push('/stockView');
    } else {
      alert('Produto não encontrado!');
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário */
  </style>
  