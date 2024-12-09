<docs>
---
title: 基础表格
---

这是一个表格的基本例子
</docs>

<template>
  <t-table :data="tableData">
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
