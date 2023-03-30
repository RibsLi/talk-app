<!-- 我 -->
<template>
  <Layout title="我" show-footer>
    <image src="https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9" class="w-full h-full bg-cover absolute top-0" />
    <view class="w-full h-full flex flex-col justify-between" style="backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.5)">
      <view class="flex flex-col items-center">
        <view class="w-280 h-280 rounded-28 mt-100 overflow-hidden relative">
          <image :src="avatar ? avatar : $icons[current].defaultAvatar" class="w-full h-full rounded-140 bg-cover" />
          <image v-if="current" :src="$icons[current].icon" class="w-30 h-30 absolute bottom-20 right-20 rounded-20 p-5 bg-cover" :class="current === 'male' ? 'bg-blue' : 'bg-red'" />
        </view>
        <view class="flex flex-col items-center mx-80">
          <text class="mt-30 mb-50 text-lg text-main-1 font-bold">
            德玛西亚
          </text>
          <text class="text-base lh-60 text-main-2">
            德玛西亚万岁，人在塔在，正义与我同在，刻不容缓。
          </text>
        </view>
      </view>
      <view class="h-80 lh-80 bg-primary text-white mx-50 rounded-40 mb-40 text-center text-base" @click="go">
        设置
      </view>
    </view>
  </Layout>
</template>

<script setup>
const avatar = 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9'
const current = ref('male')

function go() {
  uni.navigateTo({ url: '/pages/user/setting' })
}
</script>
