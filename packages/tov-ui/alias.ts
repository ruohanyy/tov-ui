import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^@tov-ui-study\/utils/,
    replacement: path.resolve(baseUrl, '../utils/src'),
  },
  {
    find: /^@tov-ui-study\/icons/,
    replacement: path.resolve(baseUrl, '../icons/src'),
  },
]
