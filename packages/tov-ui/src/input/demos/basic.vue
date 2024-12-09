<docs>
---
title: 基础使用
---

这是一个`input`基础使用的例子
</docs>

<template>
  <div>
    <t-input v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>