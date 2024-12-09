export interface InputProps {
    placeholder: '请输入',
    modelValue?: string,
    disabled?: boolean,
    size?: 'small' | 'default' | 'large'
}

export const originInputProps = ['autocomplete']