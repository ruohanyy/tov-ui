//这两个函数分别用于创建虚拟节点和将虚拟节点渲染到DOM中
import { createVNode, render } from "vue";
import type { NotificationConfig, NotificationInstance } from "./interface";
import Notification from "./notification";

export function createNotification() {
    let instance: NotificationInstance
    const info = (config: NotificationConfig) => {
        // 如果instance变量为undefined，表示通知系统的实例尚未创建
        if (!instance) {
            const body = document.body
            //创建Notification组件的虚拟节点
            const vm = createVNode(Notification, {
                onReady(_instance: NotificationInstance) {
                    instance = _instance
                    instance.add(config)
                }
            })
            if (config.appContext)
                vm.appContext = config.appContext
            //// 使用render函数将虚拟节点vm渲染到document.body中
            render(vm, body)
        }
        else {
            instance.add(config)
        }
    }
    return {
        info
    }
}