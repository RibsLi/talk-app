import path from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
        {
          '@dcloudio/uni-app': ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload'],
          lodash: '_',
          dayjs: [['default', 'dayjs']]
        }
      ],
      dirs: ['src/store', 'src/composables'],
      dts: 'src/auto-imports.d.ts', // Default `./auto-imports.d.ts`
      eslintrc: {
        enabled: true, // Default `false`
        filepath: '.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly' // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
