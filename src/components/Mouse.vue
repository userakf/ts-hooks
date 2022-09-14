<template>
    Mouse position is at: {{ x }}, {{ y }}
</template>

<script setup lang="ts">
import { useMouse } from '../hooks/useMouse'
const { x, y } = useMouse()
</script>