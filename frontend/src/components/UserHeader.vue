<script setup>
import ButtonWArrow from '../components/ButtonWArrow.vue';
import { RouterLink, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
let handleClickOutside;

onMounted (() => {
    handleClickOutside = (event) => {
        if (event.target.id != "stock") {
            document.getElementById("stockDropdown").style.display = "none";
        }

        if (event.target.id != "letterContainer" ) {
            document.getElementById("logoutButton").style.display = "none";
        }
    };

    window.addEventListener('click', handleClickOutside);
});

defineProps({
    usernameLetter: String,
    name: String,
    admin: Boolean,
});

function logout() {
    router.push('login');
}

function showHideDropdown(dropdownName) {
    if (document.getElementById(`${dropdownName}`).style.display === "flex") {
        document.getElementById(`${dropdownName}`).style.display = "none";
    } else {
        document.getElementById(`${dropdownName}`).style.display = "flex";
    }
}
</script>

<template>
    <div v-if="admin" class="header">
        <img class="logo" src="../assets/mercado-logo.png">
        <div class="buttons-container">
            <RouterLink to="/adminView" class="link-nostyling">
                <ButtonWArrow :text="'INÍCIO'"/>
            </RouterLink>
            <div class="stock-button" @click="showHideDropdown('stockDropdown')">
                <ButtonWArrow id="stock" :text="'ESTOQUE'" :arrow="true"/>
                <div id="stockDropdown" class="dropdown-button">
                    <RouterLink to="/stockView" class="link-nostyling">
                        <ButtonWArrow :text="'PRODUTOS'" :arrow="false" :dropdown="true"/>
                    </RouterLink>
                    <RouterLink to="/suppliersView" class="link-nostyling">
                        <ButtonWArrow :text="'FORNECEDORES'" :arrow="false" :dropdown="true"/>
                    </RouterLink>
                </div>
            </div>
            <RouterLink to="/salesView" class="link-nostyling">
                <ButtonWArrow :text="'VENDAS'" :arrow="false"/>
            </RouterLink>
            <RouterLink to="/employeesView" class="link-nostyling">
                <ButtonWArrow :text="'FUNCIONÁRIOS'" :arrow="false"/>
            </RouterLink>
        </div>
        <div id="letterContainer" class="letter-container" @click="showHideDropdown('logoutButton')">
            {{ usernameLetter }}
            <div id="logoutButton" class="exit-button logout" @click="logout">SAIR</div>
        </div>
    </div>
    <div v-else class="header">
        <img class="logo" src="../assets/mercado-logo.png">
        <p v-if="name" class="xp-ptag name">PDV - {{ name }}</p>
    </div>
</template>

<style scoped>
.logout {
    display: none;
    position: fixed;
    top: 80px;
    font-size: large;
    padding: 5px 10px;
}

.dropdown-button {
    position: fixed;
    display: none;
    flex-direction: column;
}

.name {
    color: var(--xp-white);
    font-weight: 500;
    font-size: x-large;
    margin: 15px 15px 0 0;
}

.letter-container{
    font-size: x-large;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--xp-white);
    margin: 15px 15px 0 0;
    cursor: pointer;
}

.buttons-container {
    display: flex;
    flex-direction: row;
}

.logo {
    object-fit: cover;
    width: 14vw;
    padding: 15px;
}

.header {
    color: var(--xp-white);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 3;
}
</style>