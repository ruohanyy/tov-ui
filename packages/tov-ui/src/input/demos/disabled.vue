<docs>
---
title: 输入框禁用
---

这是一个`input`输入框禁用的使用例子
</docs>

<template>
    <t-input v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>