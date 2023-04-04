<script setup>
onLaunch(options => {

  // uni.$store.userData = uni.getStorageSync('userData')
  // uni.$store.authorization = uni.getStorageSync('authorization')
  // if (!(uni.$store.authorization || uni.getStorageSync('authorization'))) return uni.redirectTo({ url: '/pages/index/login' })

  // api.resolve('getUserinfo').then(res => {
  //   console.log('用户信息', res)
  //   uni.setStorageSync('userData', res)
  //   uni.setStorageSync('authorization', res.token)
  //   uni.$store.userData = res
  //   uni.$store.authorization = res.token
  // })
})
</script>
