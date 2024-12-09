import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useClassnames } from '@tov-ui-study/utils'
import type { CSSProperties } from 'vue'

export default defineComponent({
    name: 'TVirtualList',
    props: {
        // 虚拟列表容器的高度
        height: {
            type: Number,
            default: 300
        },
        // 每个列表项的高度
        itemHeight: {
            type: Number,
            default: 40
        },
        // 要显示的数据
        data: {
            type: Array,
            default: () => []
        },
        // 在可视区域上下方的缓冲数量
        buffer: {
            type: Number,
            default: 5
        },
        // title: {
        //     type: String,
        //     default: "默认标题"
        // }
    },
    emit: ['clickItem'],
    setup(props, {emit}) {
        const { c } = useClassnames('virtual-list')
        const containerRef = ref() //引用容器元素
        const scrollTop  = ref(0) //跟踪当前的滚动位置
        // 滚动事件
        const onScroll  = () => {
            scrollTop.value = containerRef.value?.scrollTop || 0
        }
        const handleItemClick = (item: any) => {
            emit('clickItem', item)
          }
        // 添加滚动事件监听
        onMounted(() => {
            if (containerRef.value)
                containerRef.value.addEventListener('scroll', onScroll)
        })
         // 移除滚动事件监听
        onUnmounted(() => {
            if (containerRef.value)
                containerRef.value.removeEventListener('scroll', onScroll)
        })
        //计算容器高度
        const containerHeight = computed(() => {
            if (containerRef.value)
                return containerRef.value.clientHeight // 返回容器的实际高度
            return props.height // 否则返回 props 中的默认高度
        })
        const sliceItems = computed(() => {
            const itemHeight = props.itemHeight
            const buffer = props.buffer
            const showCounter = Math.ceil(containerHeight.value / itemHeight) //Math.ceil方法向上取整
            const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer  //Math.floor方法向下取整
            const startIndex = Math.max(0, counterIndex)  // 确保起始索引不为负
            const endIndex = showCounter + buffer * 2 + counterIndex  // 计算结束索引
            return props.data.slice(startIndex, endIndex).map((item, index) => {  // 切片数据
                return {
                    item,  // 实际项
                    top: (index + startIndex) * itemHeight,  // 计算项的顶部位置
                    key: `VirtualList${startIndex + index}`,  // 生成唯一的键
                }
            })
        })
        return  {
            c,
            containerRef,
            sliceItems,
            handleItemClick
        }
    },
    //组件模板
    render () {
        const { c, height, itemHeight, data, sliceItems, handleItemClick} = this
        const slots = this.$slots
        // 容器部分
        const containerCls = { 
            [c()]: true //类名
        }
        const containerStyle: CSSProperties = {
            height: `${height}px`, //高度
            overflowY: 'auto'
        }

        // 主体部分
        const bodyH = data.length * itemHeight // 计算主体的总高度
        const bodyCls = {
            [c('body')]: true //类名
        }
        const bodyStyle: CSSProperties = {
            height: `${bodyH}px` //高度
        }

        const renderItems = () => {
            const height = itemHeight ?? 40
            const itemCls = {
                [c('item')]: true,  // 生成每个项的类名
            }

            return sliceItems.map((item) => {
                const itemStyle: CSSProperties = {
                    height: `${height}px`,  
                    top: `${item.top}px`,
                    position: 'absolute', // 确保项绝对定位
                    width: '100%', // 确保项宽度为100%
                    display: 'flex', // 使用 flexbox 布局
                    justifyContent: 'flex-start', // 列之间的间距
                    alignItems: 'center', // 垂直居中
                }
                const onClick = () => {
                    handleItemClick(item.item)
                }
                return (
                    <div class={itemCls} onClick={onClick} style={itemStyle} key={item.key}>
                        {slots.item ? slots.item({ item: item.item}) : item.item.name}
                    </div>
                )
            })
        }
        return (
            <div class={containerCls} ref="containerRef" style={containerStyle}>
                <div class={c('header')}>{slots.item ? slots.title() : title}</div>
                <div class={bodyCls} style={bodyStyle}>
                    {renderItems()}
                </div>
            </div>
        )
    }
})