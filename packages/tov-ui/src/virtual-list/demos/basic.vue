<docs>
---
title: 基本使用
---

虚拟列表的基本用法
</docs>

<template>
  <div>
    <t-virtual-list :height="400" :itemHeight="40" :data="data" @click-item="handleClick" >
      <template #title>
        <span>自定义标题</span>
      </template>
      <template #item="{ item }">
        <div class="data-item">
          {{ item.name }}
        </div>
      </template>
    </t-virtual-list>
  </div>
</template>

<script setup lang="ts">
const data = Array.from({ length: 1000 }).map((_, index) => {
  return {
    key: index + 1,
    name: `Test` + `_${index + 1}`,
  }
})
function handleClick(item: any) {
  console.log(item)
}
</script>

<style scoped>
.data-item {
  height: 100%;
  display: flex;
  align-items: center;
  
}
</style>