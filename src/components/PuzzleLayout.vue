<script setup lang="ts">
import { remove } from 'lodash-es';
import NumberButton from './NumberButton.vue';
import OperatorButton from './OperatorButton.vue';
import { Operator, operatorFunctions } from './utils';
import { ref } from 'vue';
const argOptions = [25, 13, 3, 9, 18, 7];
const numbers = ref([...argOptions]);
const arg1 = ref<[number, number] | null>(null);
const arg2 = ref<[number, number] | null>(null);
const operator = ref<Operator | null>(null);


function selectArgument(n: number, index: number) {
    if (!arg1.value) {
        arg1.value = [n, index];
    } else if (index === arg1.value[1]) {
        arg1.value = null;
    } else if (operator.value !== null) {
        const fn = operatorFunctions.get(operator.value);
        const result = typeof fn === 'function' ? fn(arg1.value[0], n) : 0;
        console.log('Operator function: ', fn);
        if (result <= 0 || result === Infinity) {
            return;
        }
        const newNumbers = [...numbers.value];
        newNumbers[index] = result;
        delete newNumbers[arg1.value[1]];
        console.log('New numbers: ', newNumbers);
        numbers.value = newNumbers;
        arg1.value = null;
        operator.value = null;
    }
}


function selectOperator(o: Operator) {
    if (operator.value === o) {
        operator.value = null
    } else {
        operator.value = o
    }
}

</script>

<template>
    <div class="numbersWrapper">
        <div v-for="(option, index) of numbers" :key="index" class="numberOption">
            <NumberButton v-if="Boolean(option)" :isSelected="option === arg1?.[0] || option === arg2?.[0]" :value="option"
                @select-argument="(n) => selectArgument(n, index)" />
        </div>
    </div>
    <div class="operatorsWrapper">
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Add" :isSelected="operator === Operator.Add"
                @select-operator="selectOperator" />
        </div>
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Subtract" :isSelected="operator === Operator.Subtract"
                @select-operator="selectOperator" />
        </div>
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Multiply" :isSelected="operator === Operator.Multiply"
                @select-operator="selectOperator" />
        </div>
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Divide" :isSelected="operator === Operator.Divide"
                @select-operator="selectOperator" />
        </div>

    </div>
</template>

<style scoped>
.numbersWrapper {
    display: grid;
    gap: 7vw;
    grid-template-areas:
        "number number number"
        "number number number";
    justify-items: center;
}

.numberOption {
    display: grid;
    grid-area: "number";
    width: 23vw;
    height: 23vw;
    border-radius: 23vw;
}

.operatorsWrapper {
    margin-top: 16px;
    display: flex;
    justify-content: space-evenly;
}

.operatorOption {
    width: 15vw;
    height: 15vw;
    border-radius: 15vw;
}
</style>