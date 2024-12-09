<template>
    <button :class="cls" :disabled="disabled"  @click="handleClick">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useClassnames } from '@tov-ui-study/utils'

defineOptions({
    name: 'TButton'
})
//使用类型
type ButtonType = 'default' | 'primary' | 'dashed'
type ButtonSize = 'small' | 'large' | 'default'
const props = defineProps({
    type: {
        type: String as PropType<ButtonType>,
        default: 'default',
        validator: (value: string) => {
            return ['default', 'primary', 'dashed'].includes(value)
        }
    },
    // 是否禁用
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    // 按钮尺寸：小、默认、大
    size: {
        type: String as PropType<ButtonSize>,
        default: 'default',
    }
})

// 定义事件
const emit = defineEmits<{
  (e: 'click', event: Event): void;
}>();

// 点击事件处理
const handleClick = (e: Event) => {
  emit('click', e);
};
// 使用 BEM 命名工具
const { c, cx, cm } = useClassnames('button');
const cls = cx(() => ({
  [c()]: true,
  [c(cm(props.type))]: true,
  [c('size', cm(props.size))]: true,
}));
</script>

<style scoped></style>