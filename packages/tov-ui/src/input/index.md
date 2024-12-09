# Input 输入框

## 基础用法
<demo src="./demos/basic.vue"></demo>

## 尺寸
<demo src="./demos/size.vue"></demo>

## 禁用状态
<demo src="./demos/disabled.vue"></demo>

## 自动聚焦
<demo src="./demos/slot.vue"></demo>

## 带图标的输入框
<demo src="./demos/basicIonc.vue"></demo>

## 属性
									
| 属性 | 说明 | 类型 | 默认值  |
| -------- | ------------- | --------- | --- |
| placeholder | 内容占位符 | string | - |
| disabled | 是否禁用输入框 | boolean  | default |
| size | 输入框大小 | default  | small   |


## 事件

| 事件  | 说明                 | 类型                    |
| ----- | -------------------- | ----------------------- |
| change | 数据发生改变的时候触发 | `(value:string) => void` |

## 插槽
| 插槽  | 说明                 | 类型                    |
| ----- | -------------------- | ----------------------- |
| prefix | 前置插槽 | `()=>any` |
| suffix | 后置插槽 | `()=>any` |

## 方法
| 方法  | 说明                 | 类型                    |
| ----- | -------------------- | ----------------------- |
| focus | 聚焦事件方法 | `()=>void` |
| blur | 失去焦点的方法 | `()=>void` |

		
	