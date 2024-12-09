<script setup lang="ts">
// import type { PropType } from 'vue';
import { computed, ref } from 'vue';
import type { Placement } from '@floating-ui/vue';
import { useFloating, offset } from '@floating-ui/vue';

// 定义组件名
defineOptions({
  name: 'TTooltip',
});

// 定义 props
const props = withDefaults(defineProps<{
  /** 提示文字 */
  content?: string;
  /** 提示框位置 */
  placement?: Placement;
  /** 触发方式 */
  trigger?: 'hover' | 'click';
  /** 显示延迟(ms) */
  showDelay?: number;
  /** 隐藏延迟(ms) */
  hideDelay?: number;
}>(), {
  placement: 'top',
  trigger: 'hover',
  showDelay: 100,
  hideDelay: 100,
});

// 引用元素和浮动元素
const reference = ref<HTMLElement | null>(null);
const floating = ref<HTMLElement | null>(null);
const show = ref(false);

// 计算位置
const placement = computed(() => props.placement);

// 使用 floating-ui 获取位置样式
const { floatingStyles } = useFloating(reference, floating, {
  placement,
  middleware: [offset(8)], // 设置偏移量
});

// 定时器
let showTimer: ReturnType<typeof setTimeout>;
let hideTimer: ReturnType<typeof setTimeout>;

// 显示提示框
function showTooltip() {
  clearTimeout(hideTimer);
  showTimer = setTimeout(() => {
    show.value = true;
  }, props.showDelay);
};

// 隐藏提示框
const hideTooltip = () => {
  clearTimeout(showTimer);
  hideTimer = setTimeout(() => {
    show.value = false;
  }, props.hideDelay);
};

// 点击处理
const handleClick = () => {
  if (props.trigger !== 'click') return;
  show.value = !show.value;
};

// 鼠标进入
const handleMouseEnter = () => {
  if (props.trigger !== 'hover') return;
  showTooltip();
};

// 鼠标离开
const handleMouseLeave = () => {
  if (props.trigger !== 'hover') return;
  hideTooltip();
};
</script>

<template>
  <div class="t-tooltip-container">
    <!-- 触发元素 -->
    <div
      ref="reference"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot />
    </div>

    <!-- 提示框 -->
    <Transition name="fade">
      <div
        v-if="show"
        ref="floating"
        class="t-tooltip"
        :style="floatingStyles"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.t-tooltip-container {
  display: inline-block;
  position: relative;
  
}

.t-tooltip {
  position: absolute;
  z-index: 1000;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>