import classNames from "classnames";
import { computed } from 'vue'
// BEM类型定义：可以是字符串或者一个包含字符串和BEM标识符的元组
type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]
export function useClassnames(componentName: string) {
    // 组件类名前缀
    const prefix = 'tov'
    // 生成基础组件类名：prefix-componentName
    const componentClass = `${prefix}-${componentName}`
    const c = (...arg: BEMType[]) => {
        if (arg.length) {
            return arg.reduce((prev, cur) => {
                if (Array.isArray(cur)) {
                    const arg1 = cur[0]
                    const arg2 = cur[1]
                    // 处理Element：使用双下划线
                    if (arg2 === 'E') {
                        return `${prev}__${arg1}`
                    // 处理Modifier：使用双中划线
                    } else if (arg2 === 'M') {
                        return `${prev}--${arg1}`
                    }
                }
                // 处理普通后缀：使用单中划线
                return `${prev}-${cur}`
            }, componentClass) as string
        }
        return componentClass
    }
    const ce = (e:string) => [e, 'E'] as BEMType
    const cm = (m:string) => [m, 'M'] as BEMType
    const cx = (cls: () => Record<string, boolean>) => {
        return computed(() => classNames(cls()))
    }
    return {
        c,
        ce,
        cm,
        cx
    }
}