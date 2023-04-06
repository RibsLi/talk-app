<script setup>
onLaunch(options => {
  uni.redirectTo({ url: !(uni.$store.authorization || uni.getStorageSync('authorization')) ? '/pages/index/login' : '/pages/index/index' })
})
</script>
