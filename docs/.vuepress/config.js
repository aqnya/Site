import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'nekosu',
  description: 'The kernel level rootkit for files manager access control.',

  base: '/', // Cloudflare Pages 根路径部署

  theme: defaultTheme({
    navbar: ['/'],
  }),

  bundler: viteBundler(),
})