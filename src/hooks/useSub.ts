import { ref, watch } from "vue"
import type { Ref } from 'vue'
type NumParams = {
    num1: Ref<number>,
    num2: Ref<number>,
}
export function useSub({ num1, num2 }: NumParams) {
    const subNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        subFn(num1, num2)
    })
    const subFn = (num1: number, num2: number) => {
        subNum.value = num1 - num2
    }
    return { subNum, subFn }
}