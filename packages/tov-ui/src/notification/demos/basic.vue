<docs>
---
title: 基本使用
---

这是一个`notification`基础使用的例子,可以通过设置 `title` 和 `content` 属性来设置通知的标题和正文内容。 默认情况下，通知在3000毫秒后自动关闭，
可以通过设置 `duration` 属性来自定义通知的展示时间。
</docs>

<template>
  <div style="display: flex;gap: 10px;">
    <t-button @click="info1">
      Closes automatically
    </t-button>
    <t-button @click="info2">
      Won't close automatically
    </t-button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from 'tov-ui';
import { getCurrentInstance, h } from 'vue'
import Test from './components/test.vue'

const instance = getCurrentInstance()
function info1() {
  Notification.info({
    title: 'Title',
    content: h(Test),
    appContext: instance?.appContext
  })
}

function info2() {
  Notification.info({
    title: 'Title',
    content: 'This is a message that does not automatically close',
    duration: 0
  })
}
</script>
