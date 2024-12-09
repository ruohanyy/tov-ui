import { TransitionGroup, defineComponent, onMounted, ref } from "vue";
import { useClassnames } from '@tov-ui-study/utils' 
import type { NotificationConfig, NotificationConfigType, NotificationInstance } from "./interface"

export default defineComponent<{onReady: (instance: NotificationInstance) => void}>({
    name: 'TNofication',
    setup(props, { expose}) {
        const data = ref<NotificationConfigType>([])
        const index = 0
        //添加
        const add = (config: NotificationConfig) => {
            const instance: NotificationConfigType = {
                ...config,
                _id: index,
            }
           
            //关闭
            const close = () => {
                //拿到索引
                const index = data.value.findIndex(item => item._id === instance._id)
                if (index !== -1) 
                    data.value.splice(index, 1)
                if (instance._itmer)
                    // 取消定时器
                    clearTimeout(instance._itmer)
            }
            if (instance.duration !== 0) {
                instance._itmer = setTimeout(() => {
                    close()
                }, instance.duration ?? 3000);
            }
             
             data.value.push(instance)
             return close
        }
        const { c } = useClassnames('notification')
        const onReady =  () => {
            props.onReady?.({
                add
            })
        }
        onMounted(() => {
            onReady()
          })
        expose({
            add
        })
        return () => {
            const renderNotification = () => {
                const cls = {
                    [c('wrapper')]: true, // 通知外层的类名
                }
                const titleCls = {
                    [c('wrapper', 'title')]: true, // 通知标题的类名
                }
          
                const contentCls = {
                    [c('wrapper', 'content')]: true, // 通知内容的类名
                }

                return data.value.map((item) => {
                    return (
                        <div class={cls} key={item._id}>
                            <div class={titleCls}>
                                {item.title}
                            </div>
                            <div class={contentCls}>
                                {item.content}
                            </div>
                        </div>
                    )
                })
            }
            const notificationCls = {
                [c()]: true
            }
            return (
                <>
                    <div class={notificationCls}>
                        <TransitionGroup name="tov-slide-right" tag="div">
                            {renderNotification()}
                        </TransitionGroup>
                    </div>
                </>
            )
        }
    }
})