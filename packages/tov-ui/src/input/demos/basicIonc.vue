<docs>
---
title: 使用输入框插槽
---

可以通过`prefix`和`suffix`插槽来自定义输入框的前后缀
</docs>

<template>
  <div> 
    <t-input v-model="value">
        <template #prefix>
           <search />
        </template>
    </t-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { search } from '@tov-ui-study/icons'

const value = ref('')

</script>