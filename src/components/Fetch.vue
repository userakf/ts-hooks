<template>
    <div>
        <ul>
            <li v-for="it in data">{{ it }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useFetch } from '../hooks/useFetch';
const { data, error } = useFetch('http://jsonplaceholder.typicode.com/posts')
</script>