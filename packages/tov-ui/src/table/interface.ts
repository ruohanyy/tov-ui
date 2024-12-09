export interface columnType {
  title: string //标题
  key: string //内容
  stripe: boolean //是否显示斑马纹
}

export interface HeaderProps {
  columns?: columnType[]
}

export interface TableProps {
  columns?: columnType[]
  data?: any[]
  stripe?: boolean
}

export interface BodyProps {
  columns?: columnType[]
  data?: any[]
  stripe?: boolean
}
