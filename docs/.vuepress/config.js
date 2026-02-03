import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'en-US',

  title: 'nekosu',
  description: 'The kernel level rootkit for files manager access control.',

  theme: defaultTheme({
//    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/'],
  }),

  bundler: webpackBundler(),
})
