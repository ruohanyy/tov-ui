

<script setup lang="ts">
import { ref } from 'vue'
import { useClassnames } from '../gen-class'
const { c, cm, ce } = useClassnames('button')
const testRef = ref(false)
const handleClick = () => {
    testRef.value = !testRef.value
}
// const cls = cx (() => ({
//     c: true, 
//     d:testRef.value
// }))
</script>

<template>
    <div :class="c('primary')">
        {{ c('a', ce('b'), cm('primary')) }}
        <button @click="handleClick">按钮</button>
    </div>
</template>