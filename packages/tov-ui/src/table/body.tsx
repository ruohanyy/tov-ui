import { defineComponent } from 'vue'
import { useClassnames } from '@tov-ui-study/utils'
import type { BodyProps } from './interface'

export const Body = defineComponent<BodyProps>({
  name: ' Body',
  setup(props = { columns: [], data: [], stripe: false }) {
    const { c } = useClassnames('table')
    return () => {
        const cellCls = {
            [c('cell')]: true,
            [c('body-cell')]: true,
          }
        const { columns,data } = props
        //列
        const renderCell = (item: any) => {
            return columns?.map((column) => {
            return (<td class={cellCls}>{ item[column.key] }</td>)
            })
        }
         // 行类名 - 添加斑马纹
         const rowCls = (index: number) => ({
          // [c('header-row')]: true,
          [c('body-row')]: true,
          [c('striped')]: props.stripe && index % 2 === 1  // 奇数行添加斑马纹
        })
          //行
        const renderData = () => {
            return data?.map((column, index) => {
            return (<tr class={rowCls(index)}>{ renderCell(column) }</tr>)
            })
        }
          const cls = {
            [c('body')]: true
          }
        return (
            <tbody class={cls}>
                {renderData()}
            </tbody>
        )
    }
  },
})
