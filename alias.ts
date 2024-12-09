import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
    {
      find: /^tov-ui/,
      replacement: path.resolve(baseUrl, 'packages/tov-ui/src'),
    },
    {
      find: /^@tov-ui-study\/utils/,
      replacement: path.resolve(baseUrl, 'packages/utils/src'),
    },
    {
      find: /^@tov-ui-study\/icons/,
      replacement: path.resolve(baseUrl, 'packages/icons/src'),
    }
]