<template>
  <div :class="cls" v-bind="omit($useAttrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input placeholder="Please input" ref="inputRef" v-bind="pick($useAttrs, originInputProps)" :disabled="disabled" :class="inputCls" :value="modelValue" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import type { InputProps, originInputProps } from './interface';
import { useClassnames } from '@tov-ui-study/utils';
import { omit, pick } from 'lodash-es';

defineOptions({
  name: 'TInput',
  inheritAttrs: false
})
//定义了组件可接收的属性
const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue': [string];
}>()

defineSlots<{
  prefix(): any
  suffix(): any
}>()

const { cx, c, cm, ce } = useClassnames('input')
//用于直接操作原生输入框元素
const inputRef = ref<HTMLInputElement>()
const cls = cx(() => {
  return {
    // 基础修饰符类名
    [c()]: true,
    // 类型修饰符类名
    [c(cm('disabled'))]: props.disabled,
    // 尺寸修饰符类名
    [c(cm(props.size))]: !!props.size,
  }
})
const inputCls = cx(() => {
  return {
    [c('input')]: true
  }
})
/**
 * 同步输入框的值
 * 确保实际 DOM 中的输入框值与 props.modelValue 保持一致
 * 
 * 逻辑说明：
 * 1. 获取输入框 DOM 元素
 * 2. 检查输入框是否存在且值是否需要更新
 * 3. 如果需要更新，则设置新值
 */
function setInputValue() {
  const _input = inputRef.value
  if (!_input || _input.value === props.modelValue) {
    return
  }
  _input.value = props.modelValue ?? ''
}
/**
 * 处理输入事件
 * 当用户在输入框中输入内容时触发
 * 
 * 逻辑说明：
 * 1. 获取事件目标（输入框）的值
 * 2. 检查值是否发生变化
 * 3. 触发更新事件
 * 4. 在下一个 DOM 更新周期同步输入框的值
 */
function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (props.modelValue === target.value) {
    return
  }
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}

function focus() {
  inputRef.value?.focus()
}
function blur() {
  inputRef.value?.blur()
}
defineExpose({
  focus,
  blur
})
onMounted(() => {
  setInputValue()
})
</script>


