<docs>
---
title: 按钮大小
---

通过`size`属性可以设置按钮大小
</docs>

<template>
  <div style="display: flex;gap: 10px;">
    <t-button size="small" @click="handleClick">
      按钮1
    </t-button>
    <t-button size="default" @click="handleClick">
      按钮2
    </t-button>
    <t-button size="large" @click="handleClick">
      按钮3
    </t-button>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>
