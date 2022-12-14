import { ref, watch } from "vue"
import type { Ref } from 'vue'

type NumParams = {
    num1: Ref<number>,
    num2: Ref<number>,
}
const useAdd = ({ num1, num2 }: NumParams) => {
    const addNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        addFn(num1, num2)
    })
    const addFn = (num1: number, num2: number) => {
        addNum.value = num1 + num2
    }
    return {
        addNum,
        addFn
    }
}
export default useAdd