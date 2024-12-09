<docs>
---
title: 输入框尺寸
---

这是一个`input`输入框尺寸的使用例子
</docs>

<template>
  <div style="display: flex;flex-wrap: wrap;gap: 10px">
    <t-input v-model="value" size="small" />
    <t-input v-model="value" size="default" />
    <t-input v-model="value" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
