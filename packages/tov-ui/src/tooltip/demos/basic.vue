<docs>
---
title: 基础使用
---


这是一个`tooltip`基础使用的例子, 我们提供了9 种展示方式; 四个方向: `top`、`right`、`bottom`、`left`; 三种对齐位置: `start`、`end`、默认居中，
通过 content 设置提示内容, placement 设置位置与对齐方式。
</docs>

<template>
  <div class="tooltip-box">
    <div class="row center">
      <t-tooltip class="box-item" content="Top Left prompts info" placement="top-start">
        <t-button>top-start</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Top Center prompts info" placement="top">
        <t-button>top</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Top Right prompts info" placement="top-end">
        <t-button>top-end</t-button>
      </t-tooltip>
    </div>
    <div class="row">
      <t-tooltip class="box-item" content="Left Top prompts info" placement="left-start">
        <t-button>left-start</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Right Top prompts info" placement="right-start">
        <t-button>right-start</t-button>
      </t-tooltip>
    </div>
    <div class="row">
      <t-tooltip class="box-item" content="Left Center prompts info" placement="left">
        <t-button>left</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Right Center prompts info" placement="right">
        <t-button>right</t-button>
      </t-tooltip>
    </div>
    <div class="row">
      <t-tooltip class="box-item" content="Left Bottom prompts info" placement="left-end">
        <t-button>left-end</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Right Bottom prompts info" placement="right-end">
        <t-button>right-end</t-button>
      </t-tooltip>
    </div>
    <div class="row center">
      <t-tooltip class="box-item" content="Bottom Left prompts info" placement="bottom-start">
        <t-button>bottom-start</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Bottom Center prompts info" placement="bottom">
        <t-button>bottom</t-button>
      </t-tooltip>
      <t-tooltip class="box-item" content="Bottom Right prompts info" placement="bottom-end">
        <t-button>bottom-end</t-button>
      </t-tooltip>
    </div>
  </div>
</template>

<style scoped>
.tooltip-box {
  width: 600px;
}

.tooltip-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-box .center {
  justify-content: center;
}

.tooltip-box .box-item {
  margin: 10px;
}
</style>