<docs>
---
title: 禁用按钮
---

设置`disabled`属性为`true`即可禁用按钮
</docs>

<template>
  <div style="display: flex;gap: 10px;">
    <t-button disabled @click="handleClick">
      按钮1
    </t-button>
    <t-button disabled type="dashed" @click="handleClick">
      按钮2
    </t-button>
    <t-button disabled type="primary" @click="handleClick">
      按钮3
    </t-button>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

