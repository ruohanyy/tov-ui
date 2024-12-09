<docs>
---
title: 自定义内容
---

这是一个`tooltip`自定义内容使用的例子
</docs>

<template>
    <t-tooltip content="Custom content" placement="top">
        <t-button>Custom content</t-button>
        <template #content>
            <div>
                <h4>title</h4>
                <p>content</p>
            </div>
        </template>
    </t-tooltip>
</template>
