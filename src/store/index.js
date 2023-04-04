export const useStore = defineStore('index', () => {
  const data = reactive({
    authorization: uni.getStorageSync('authorization') || '', // 鉴权码
    userData: uni.getStorageSync('userData') || null, // 用户信息
    currentTabbar: 'home' // 当前选中的tabbar
  })

  return {
    ...toRefs(data)
  }
})
