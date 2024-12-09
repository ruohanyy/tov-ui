# Table 表格

## 基础用法
<demo src="./demos/basic.vue"></demo>

## 带斑马纹表格
<demo src="./demos/zebraStripe.vue"></demo>

## 属性

| 属性       | 类型      | 描述                             | 默认值   |
|------------|-----------|----------------------------------|----------|
| data       | `Array`   | 表格的数据源，包含每一行的数据 | `[]`     |
| stripe     | `Boolean` | 是否启用斑马纹样式，如果为 `true`，表格将带有斑马纹 | `false`  |
| key        | `String`  | 列的唯一标识符，用于渲染每一列 | `无`     |
| title      | `String`  | 列的标题                         | `无`     |