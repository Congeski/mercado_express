<script setup>
  import { ref } from 'vue';
  import { employees } from '../data'; // Supondo que você tenha um array chamado 'employees'
  import { useRouter } from 'vue-router';

  const novoFuncionario = ref({
    code: '',
    name: '',
    cpf: '',
    email: '',
    role: ''
  });
  
  const router = useRouter();
  
  const adicionarFuncionario = () => {
    employees.push({
      code: novoFuncionario.value.code,
      name: novoFuncionario.value.name,
      cpf: novoFuncionario.value.cpf,
      email: novoFuncionario.value.email,
      role: novoFuncionario.value.role
    });
    
    novoFuncionario.value.code = '';
    novoFuncionario.value.name = '';
    novoFuncionario.value.cpf = '';
    novoFuncionario.value.email = '';
    novoFuncionario.value.role = '';
  
    router.push('/employeesView');
  };

  function goBack() {
    router.push('/employeesView');
  }
</script>

<template>
  <div class="page-container">  
    <div class="add-product">
        <h2>Adicionar Funcionário</h2>
        <div>
          <form @submit.prevent="adicionarFuncionario" class="product-form">
          <div>
            <label for="code">Cód</label>  
            <input class="xp-input" type="text" id="code" v-model="novoFuncionario.code">
          </div>
          <div>
            <label for="name">Nome</label>  
            <input class="xp-input" type="text" id="name" v-model="novoFuncionario.name">
          </div>
          <div>
            <label for="cpf">CPF</label>
            <input type="text" class="xp-input" id="cpf" v-model="novoFuncionario.cpf">
          </div>
          <div>
            <label for="email">eMail</label>
            <input type="email" class="xp-input" id="email" v-model="novoFuncionario.email">
          </div>
          <div>
            <label for="role">Cargo</label>
            <input type="text" class="xp-input" id="role" v-model="novoFuncionario.role">
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