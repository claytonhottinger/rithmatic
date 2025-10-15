import type { InjectionKey, Ref } from "vue";
import type { Operator } from "../utils";

// const NUMBERS = Symbol() as InjectionKey<Ref<number[]>>;
// const TARGET = Symbol() as InjectionKey<Ref<number>>;
// const FIRST_INDEX = Symbol() as InjectionKey<Ref<number | null>>;
// const SECOND_INDEX = Symbol() as InjectionKey<Ref<number | null>>;
// const OPERATOR = Symbol() as InjectionKey<Ref<Operator | null>>;
// const SELECT_NUMBER = Symbol() as InjectionKey<(index: number) => void>;
// const SELECT_OPERATOR = Symbol() as InjectionKey<(o: Operator) => void>;
// const RESET = Symbol() as InjectionKey<() => void>;
// const UNDO = Symbol() as InjectionKey<() => void>;

export default {
    NUMBERS: Symbol() as InjectionKey<Ref<(number | null)[]>>,
    TARGET: Symbol() as InjectionKey<Ref<number>>,
    FIRST_INDEX: Symbol() as InjectionKey<Ref<number | null>>,
    SECOND_INDEX: Symbol() as InjectionKey<Ref<number | null>>,
    OPERATOR: Symbol() as InjectionKey<Ref<Operator | null>>,
    SELECT_NUMBER: Symbol() as InjectionKey<(index: number) => void>,
    SELECT_OPERATOR: Symbol() as InjectionKey<(o: Operator) => void>,
    RESET: Symbol() as InjectionKey<() => void>,
    UNDO: Symbol() as InjectionKey<() => void>
}