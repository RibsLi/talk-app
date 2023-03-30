<script setup>
// 获取并存储设备信息
const systemInfo = uni.getSystemInfoSync()
uni.setStorageSync('systemInfo', systemInfo)
uni.$store.systemInfo = systemInfo
</script>
