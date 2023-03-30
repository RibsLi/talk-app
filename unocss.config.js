import { defineConfig, presetAttributify, transformerDirectives, transformerVariantGroup } from 'unocss'
import { entriesToCss } from '@unocss/core'
import { theme } from '@unocss/preset-mini'
import { presetApplet, presetRemToRpx, transformerApplet, transformerAttributify } from 'unocss-applet'

// UniApp
const isH5 = process.env.UNI_PLATFORM === 'h5'

export default defineConfig({
  rules: [
    // 多行省略
    [/^line-clamp-(\d+)$/, ([, value]) => ({
      overflow: 'hidden',
      display: '-webkit-box',
      'word-break': 'break-all',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': `${value}`
    })]
  ],
  theme: {
    preflightBase: undefined,
    colors: {
      default: {
        DEFAULT: '#F5F5F5',
        1: '#F6F6F6'
      }, // 背景色
      main: {
        1: '#070707', // 主要文字颜色
        2: '#555555', // 二级标题颜色
        3: '#A2A2A2' // 辅助性文字、ICON颜色、失效按钮
      },
      divider: {
        DEFAULT: '#E0E0E0', // 分割线
        1: '#EEEEEE',
        2: '#E6E6E6'
      },
      primary: '#3EC8A4', // 主色
      secondary: '#E3F5F1', // 辅助色
      red: {
        DEFAULT: '#FF5F5F' // 红色
      },
      yellow: {
        light: '#FFF3D4', // 浅黄辅助色
        DEFAULT: '#FFD74A', // 点缀黄
        dark: '#FF951A' // 点缀辅助色
      }
    },
    fontSize: {
      xs: ['20rpx /* 10px */', null],
      sm: ['24rpx /* 12px */', null],
      base: ['28rpx /* 14px */', null],
      lg: ['32rpx /* 16px */', null],
      xl: ['36rpx /* 18px */', null],
      '2xl': ['40rpx /* 20px */', null],
      '3xl': ['48rpx /* 24px */', null]
    }
  },
  preflights: [{
    getCSS: () => {
      const css = entriesToCss(Object.entries(theme.preflightBase))
      // const selector = process.env.UNI_PLATFORM === 'mp-weixin' ? 'view' : '*'
      const selector = isH5 ? '*' : 'view,text,button,input,image'
      return `${selector},::before,::after{${css}}::backdrop{${css}}`
      // isH5
      //   ? `body { font-size: ${theme.fontSize.base[0]}; }`
      //   : `page { font-size: ${theme.fontSize.base[0]}; }`
    }
  }],
  presets: [
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    presetApplet({ enable: !isH5 }),
    presetAttributify(),
    presetRemToRpx({ baseFontSize: 4, screenWidth: 750 })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
    transformerApplet()
  ]
})
