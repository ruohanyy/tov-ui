<docs>
---
title: 带斑马纹表格
---

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹
</docs>

<template>
  <t-table :data="tableData" :stripe="true">
    <t-table-column key="date" title="Date" />
    <t-table-column key="name" title="Name" />
    <t-table-column key="address" title="Address" />
  </t-table>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2024-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
</script>
