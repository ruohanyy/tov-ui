import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { gold, green, purple, red } from '@ant-design/colors'

// 生成主题色变量
let colors = ''
purple.forEach((color, index) => {
  colors += `--tov-color-primary-${index + 1}: ${color};\n`
})
colors += `\n`

// 生成成功色变量
green.forEach((color, index) => {
  colors += `--tov-color-success-${index + 1}: ${color};\n`
})
colors += `\n`

// 生成警告色变量
gold.forEach((color, index) => {
  colors += `--tov-color-warning-${index + 1}: ${color};\n`
})
colors += `\n`

// 生成错误色变量
red.forEach((color, index) => {
  colors += `--tov-color-error-${index + 1}: ${color};\n`
})
// 获取项目根目录路径
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/tov-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
console.log(success);

