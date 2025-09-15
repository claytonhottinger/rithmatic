<script setup lang="ts">
import { getRandomArrayMember, getRandomIntInclusive, isNotNullish, isNullish, knuthShuffle, Operator, operatorFunctions, OperatorIndex } from '../utils';
import { provide, ref } from 'vue';
import keys from './keys';
const MIN = 1;
const TARGET_MAX = 200;
const OPTION_MAX = 25;

const [generatedTarget, argOptions] = generatePuzzle();
const numbers = ref([...argOptions]);
const target = ref(generatedTarget);
const arg1 = ref<number | null>(null);
const arg2 = ref<number | null>(null);
const operator = ref<Operator | null>(null);

function generatePuzzle(count = 6): [number, number[]] {
    // const target = Math.floor(Math.random() * 100);
    let target: number = 0;
    const options = [];
    let i = 0;
    while (i < count) {
        const option = getRandomIntInclusive(MIN, OPTION_MAX);
        if (!target) {
            target = option;
        } else {
            target = applyRandomOperatorToTarget(target, option);
        }
        options.push(option);
        i++;
    }

    return [target, knuthShuffle(options)];
}

function applyRandomOperatorToTarget(target: number, option: number, forceOperators?: OperatorIndex[]) {
    const operatorFunctionArray = Array.from(operatorFunctions.values())
    const randomOperator = operatorFunctionArray[getRandomArrayMember(forceOperators) ?? getRandomIntInclusive(OperatorIndex.Add, OperatorIndex.Divide)]
    let newTarget = randomOperator(target, option);

    if (!Number.isInteger(newTarget)) {
        return applyRandomOperatorToTarget(target, option, [OperatorIndex.Add, OperatorIndex.Multiply, OperatorIndex.Subtract]);
    }
    if (newTarget > TARGET_MAX) {
        return applyRandomOperatorToTarget(target, option, [OperatorIndex.Subtract, OperatorIndex.Divide]);
    }
    if (newTarget < 0) {
        return applyRandomOperatorToTarget(target, option, [OperatorIndex.Add, OperatorIndex.Multiply])
    }

    return newTarget;
}

function selectArgument(index: number) {
    if (index === arg2.value) {
        arg2.value = null;
        return;
    }
    if (index === arg1.value) {
        arg1.value = null;
        return;
    }

    if (isNullish(arg1.value)) {
        arg1.value = index;
    } else if (isNullish(arg2.value)) {
        arg2.value = index;
        if (operator.value !== null) {
            completeCalculation();
        }
    }

}

function completeCalculation() {
    if (operator.value && isNotNullish(arg1.value) && isNotNullish(arg2.value)) {
        const fn = operatorFunctions.get(operator.value);
        const result = typeof fn === 'function' ? fn(numbers.value[arg1.value], numbers.value[arg2.value]) : 0;

        if (result > 0 && result !== Infinity && Number.isInteger(result)) {
            const newNumbers = [...numbers.value];
            newNumbers[arg2.value] = result;
            delete newNumbers[arg1.value];
            numbers.value = newNumbers;
        }

        arg1.value = null;
        arg2.value = null;
        operator.value = null;
    }
}

function selectOperator(o: Operator) {
    if (operator.value === o) {
        operator.value = null
    } else {
        operator.value = o
        if (isNotNullish(arg1.value) && isNotNullish(arg2.value)) {
            completeCalculation();
        }
    }
}

function reset() {
    arg1.value = null;
    arg2.value = null;
    numbers.value = [...argOptions];
}

provide(keys.NUMBERS, numbers);
provide(keys.TARGET, target);
provide(keys.FIRST_INDEX, arg1);
provide(keys.SECOND_INDEX, arg2);
provide(keys.OPERATOR, operator);

provide(keys.SELECT_NUMBER, selectArgument);
provide(keys.SELECT_OPERATOR, selectOperator);
provide(keys.RESET, reset);

</script>

<template>
    <slot></slot>
</template>
