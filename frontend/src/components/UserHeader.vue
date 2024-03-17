<script setup>
import { defineProps } from 'vue';
import ButtonWArrow from '../components/ButtonWArrow.vue';
import { RouterLink } from 'vue-router';

defineProps({
    usernameLetter: String,
    name: String,
    admin: Boolean,
});

</script>

<template>
    <div v-if="admin" class="header">
        <img class="logo" src="../assets/mercado-logo.png">
        <div class="buttons-container">
            <RouterLink to="/adminView" class="link-nostyling">
                <ButtonWArrow :text="'INÍCIO'"/>
            </RouterLink>
            <div class="stock-button">
                <ButtonWArrow :text="'ESTOQUE'" :arrow="true"/>
                <div class="stock-dropdown">
                    <ButtonWArrow :text="'PRODUTOS'" :arrow="false" :dropdown="true"/>
                    <ButtonWArrow :text="'FORNECEDORES'" :arrow="false" :dropdown="true"/>
                </div>
            </div>    
            <RouterLink to="/stockView" class="link-nostyling">
            </RouterLink>
            <RouterLink to="/salesView" class="link-nostyling">
                <ButtonWArrow :text="'VENDAS'" :arrow="true"/>
            </RouterLink>
            <RouterLink to="/employeesView" class="link-nostyling">
                <ButtonWArrow :text="'FUNCIONÁRIOS'" :arrow="true"/>
            </RouterLink>
        </div>
        <RouterLink to="/adminView" class="link-nostyling">
            <div class="letter-container">
                {{ usernameLetter }}
            </div>
        </RouterLink>
    </div>
    <div v-else class="header">
        <img class="logo" src="../assets/mercado-logo.png">
        <p v-if="name" class="xp-ptag name">PDV - {{ name }}</p>
    </div>
</template>

<style scoped>
.stock-dropdown {
    position: fixed;
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