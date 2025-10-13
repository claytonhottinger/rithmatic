<script setup lang="ts">
import { inject } from 'vue';
import NumberButton from './NumberButton.vue';
import OperatorButton from './OperatorButton.vue';
import keys from './PuzzleProvider/keys';
import ResetButton from './ResetButton.vue';
import { Operator } from "./utils";
const target = inject(keys.TARGET);
const numbers = inject(keys.NUMBERS);

</script>

<template>
    <div class="targetWrapper">
        <div class="operatorOption">
            <ResetButton />
        </div>
        <div class="target">
            {{ target }}
        </div>
        <div class="operatorOption">
        </div>
    </div>
    <div class="numbersWrapper">
        <div v-for="(option, index) of numbers" :key="index" class="numberOption">
            <NumberButton v-if="Boolean(option)" :value="option" :index="index" />
        </div>
    </div>
    <div class="operatorsWrapper">
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Add" />
        </div>
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Subtract" />
        </div>
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Multiply" />
        </div>
        <div class="operatorOption">
            <OperatorButton :operator="Operator.Divide" />
        </div>
    </div>
</template>

<style scoped>
.targetWrapper {
    display: grid;
    gap: 2rem;
    grid-template-areas: "reset target blank";
    justify-content: space-between;
}

.numbersWrapper {
    display: grid;
    gap: 2rem;
    grid-template-areas:
        "number number number"
        "number number number";
    justify-content: center;
    margin-top: 4rem;
}

.target {
    font-size: 13rem;
}

.numberOption {
    display: grid;
    min-width: 13rem;
    min-height: 13rem;
    border-radius: 13rem;
}

.operatorsWrapper {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    grid-template-areas:
        "operator operator operator operator";
    justify-content: center;
}

.operatorOption {
    width: 8rem;
    height: 8rem;
    border-radius: 8rem;
}
</style>