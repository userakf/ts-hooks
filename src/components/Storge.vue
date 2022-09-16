<template>
    <div>
        name:{{ store.name }}
        <br>
        color:{{ store.color }}
    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '../hooks/useLocalStorage';
const store = useLocalStorage('store',{
    name:'kfc',
    color:'#fff'
})

</script>

<style scoped>

</style>