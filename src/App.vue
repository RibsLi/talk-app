<script setup>
onLaunch(options => {
  if (!(uni.$store.authorization || uni.getStorageSync('authorization'))) return uni.redirectTo({ url: '/pages/index/login' })
})
</script>
