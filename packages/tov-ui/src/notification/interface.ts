//VNode用于描述真实DOM元素的虚拟表示
import type { VNode } from "vue";

export interface NotificationConfig {
    content: string | VNode, //内容
    title: string | VNode, //标题
    duration?: number //毫秒
    appContext?: any //用于在通知中访问Vue应用的相关数据和方法
}

export interface NotificationConfigType extends NotificationConfig {
    _id?: number, //唯一标识符
    _timer?:  ReturnType<typeof setTimeout>;   // 可选的定时器引用，用于清除定时器
}

export interface NotificationInstance {
     // add方法接受一个NotificationConfig类型的参数config，用于添加一个新的通知。
    // 该方法返回一个函数，这个函数在被调用时可以用来关闭或移除通知。
    add: (config: NotificationConfig) => (() => void)
}