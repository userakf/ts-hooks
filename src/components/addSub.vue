<template>
    <div>
        num1: <input type="text" v-model.number="num1">
        <br>
        num2: <input type="text" v-model.number="num2">
    </div>
    <span>加法等于: {{ addNum }}</span>
    <span>减法等于: {{ subNum }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAdd from '../hooks/useAdd';
import { useSub } from '../hooks/useSub'

const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)
//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)

</script>