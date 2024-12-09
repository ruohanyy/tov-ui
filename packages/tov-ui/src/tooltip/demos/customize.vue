<docs>
---
title: 触发方式
---

`Tooltip`支持两种触发方式，分别是点击`click`和触摸`hover`。
</docs>

<template>
    <div style="display: flex;gap: 10px;">
        <t-tooltip content="click" trigger="click">
            <t-button>Click to show</t-button>
        </t-tooltip>
        <t-tooltip content="hover" trigger="hover">
            <t-button>Touch display</t-button>
        </t-tooltip>
    </div>
</template>
