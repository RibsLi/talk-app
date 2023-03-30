export const useStore = defineStore('index', () => {
  const data = reactive({
    authentication: '', // 授权码
    currentTabbar: 'home', // 当前选中的tabbar
    systemInfo: {} // 设备信息
  })

  return {
    ...toRefs(data)
  }
})
