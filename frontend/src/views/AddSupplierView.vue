<script setup>
  import { ref } from 'vue';
  import { suppliers } from '../data'; // Supondo que você tenha um array chamado 'employees'
  import { useRouter } from 'vue-router';

  const novoFornecedor = ref({
    name: '',
    cnpj: '',
    cep: '',
  });
  
  const router = useRouter();
  
  const adicionarFornecedor = () => {
    suppliers.push({
        name: novoFornecedor.value.name,
        cnpj: novoFornecedor.value.cnpj,
        cep: novoFornecedor.value.cep  
    });

    console.log(suppliers);
    
    novoFornecedor.value.name = '';
    novoFornecedor.value.cnpj = '';
    novoFornecedor.value.cep = '';

    router.push('/suppliersView');

  };

  function goBack() {
    router.push('/suppliersView');
  }
</script>

<template>
  <div class="page-container">  
    <div class="add-product">
        <h2>Adicionar Fornecedor</h2>
        <div>
          <form @submit.prevent="adicionarFornecedor" class="product-form">
            <div>
                <label for="name">Nome </label>  
                <input class="xp-input" type="text" id="name" v-model="novoFornecedor.name">
            </div>
            <div>
                <label for="cnpj">CNPJ</label>
                <input type="text" class="xp-input" id="cnpj" v-model="novoFornecedor.cnpj">
            </div>
            <div>
                <label for="cep">CEP </label>
                <input type="cep" class="xp-input" id="cep" v-model="novoFornecedor.cep">
            </div>
            <div class="buttons-container">
                <button class="div-button" type="submit">Adicionar Funcionário</button>
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