<script setup lang="ts">
import NumberButton from './NumberButton.vue';
import OperatorButton from './OperatorButton.vue';
import { ref } from 'vue';
const argOptions = [25, 13, 3, 9, 18, 7];
const numbers = [...argOptions];
const arg1 = ref<number | null>(null);
const arg2 = ref<number | null>(null);
const operator = ref<string | null>(null);

function selectArgument(n: number, index: number) {
    if (!arg1.value) {
        arg1.value = n;
    }
}


function selectOperator(o: string) {
    if (operator.value === o) {
        operator.value = null
    } else {
        operator.value = o
    }
}

</script>

<template>
    <div class="numbersWrapper">
        <div v-for="option of argOptions" :key="option" class="numberOption"><NumberButton :isSelected="option === arg1 || option === arg2" :value="option" @select-argument="selectArgument" /></div>
    </div>
    <div class="operatorsWrapper">
        <div class="operatorOption">
            <OperatorButton operator="+" :isSelected="operator === '+'" @select-operator="selectOperator"  />
            <OperatorButton operator="-" :isSelected="operator === '-'" @select-operator="selectOperator"  />
            <OperatorButton operator="*" :isSelected="operator === '*'" @select-operator="selectOperator"  />
            <OperatorButton operator="/" :isSelected="operator === '/'" @select-operator="selectOperator"  />
        </div>
    </div>
</template>

<style scoped>
    .numbersWrapper {
        display: grid;
        gap: 7vw;
        grid-template-areas: 
        "item item item"
        "item item item";
        justify-items: center;
    }
    
    .numberOption {
        display: grid;
        grid-area: "item";
        width: 23vw;
        height: 23vw;
        border-radius: 23vw;
    }

    .operatorsWrapper {
        display: flex;
    }

    .operatorOption {
        width: 15vw;
        height: 15vw;
        border-radius: 15vw;
    }
</style>