<template>
    Load post id:
    <button v-for="i in 5" @click="id = i">{{ i }}</button>

    <div v-if="error">
        <p>Oops! Error encountered: {{ error.message }}</p>
        <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data">Data loaded:
        <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFetch } from '../hooks/useFetch';
const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref(1)
const url = computed(() => baseUrl + id.value)
const { data, error, retry } = useFetch(url)
</script>