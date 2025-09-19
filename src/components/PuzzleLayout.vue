<script setup lang="ts">
import { inject } from 'vue';
import NumberButton from './NumberButton.vue';
import OperatorButton from './OperatorButton.vue';
import keys from './PuzzleProvider/keys';
import ResetButton from './ResetButton.vue';
import { Operator } from "./utils";
import HelpButton from './HelpButton.vue';
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
            <HelpButton />
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
    gap: 1rem;
    grid-template-areas: "reset target blank";
    justify-items: center;
}

.numbersWrapper {
    display: grid;
    gap: 1rem;
    grid-template-areas:
        "number number number"
        "number number number";
    justify-items: center;
    margin-top: 2rem;
}

.target {
    font-size: 13rem;
}

.numberOption {
    display: grid;
    width: 15rem;
    height: 15rem;
    border-radius: 15rem;
}

.operatorsWrapper {
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
}

.operatorOption {
    width: 12rem;
    height: 12rem;
    border-radius: 12rem;
}
</style>