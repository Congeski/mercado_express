<script setup>
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/UsersStore.js';
import { ref } from 'vue';

const usersStore = useUsersStore();
const router = useRouter();
const givenUsername = ref('');
const givenPassword = ref('');

function login() {
    const loggedIn = usersStore.login(givenUsername.value, givenPassword.value);
    if(!loggedIn) {
        alert("Usuário e/ou senha incorreto(s)");
        window.location.reload();
    } else {
        if(usersStore.admin) {
            router.push('adminView');
        } else {
            router.push('sellerView');
        }
    }
}
</script>

<template>
    <div class="page-container">
        <div class="header">
            <p>LOGIN</p>
        </div>
        <div class="inputs-container">
            <input class="xp-input" id="username" v-model="givenUsername"
                type="text" placeholder="Digite o seu código"/>
            <input class="xp-input" id="password" v-model="givenPassword"
                type="password" placeholder="Digite a sua senha"/>
        </div>
        <div class="div-button xp-login" @click="login">
            ENTRAR
        </div>
        <div class="logo-container">
            <img src="../assets/mercado-logo.png" class="logo"/>
        </div>
    </div>  
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 20vw;
    position: fixed;
    left: 52%;
    transform:translate(-50%, 0%);
    bottom: 15px;
}

.xp-login {
    margin-top: 6vh;
}

.header {
    position: fixed;
    top: 40px;
    color: var(--xp-cream);
    font-weight: 500;
    font-size: xx-large;
}

.inputs-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
