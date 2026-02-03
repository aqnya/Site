import comp from "/data/data/com.termux/files/home/docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"nekosu\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"nekosu\",\"footer\":\"GPL Licensed | Copyright © 2025-present FMAC-Team\"},\"headers\":[{\"level\":2,\"title\":\"Highlights\",\"slug\":\"highlights\",\"link\":\"#highlights\",\"children\":[]},{\"level\":2,\"title\":\"About us:\",\"slug\":\"about-us\",\"link\":\"#about-us\",\"children\":[]},{\"level\":2,\"title\":\"Get nekosu\",\"slug\":\"get-nekosu\",\"link\":\"#get-nekosu\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
