<!-- 我 -->
<template>
  <Layout title="我" show-footer>
    <image :src="userData?.avatar ? userData?.avatar : $icons[gender]?.defaultAvatar" mode="aspectFill" class="w-full h-full bg-cover absolute top-0 z--1" />
    <view class="w-full h-full flex flex-col justify-between bg-[rgba(255,255,255,0.5)] backdrop-blur">
      <view class="flex flex-col items-center">
        <view class="w-280 h-280 rounded-28 mt-100 overflow-hidden relative">
          <image :src="userData?.avatar ? userData?.avatar : $icons[gender]?.defaultAvatar" mode="aspectFill" class="w-full h-full rounded-140 bg-cover" />
          <image :src="$icons[gender]?.icon" mode="aspectFill" class="w-30 h-30 absolute bottom-20 right-20 rounded-20 p-5 bg-cover" :class="gender === 'male' ? 'bg-blue' : 'bg-red'" />
        </view>
        <view class="flex flex-col items-center mx-80">
          <text class="mt-30 mb-50 text-lg text-main-1 font-bold">
            {{ userData?.username }}
          </text>
          <text class="text-base lh-60 text-main-2">
            {{ userData?.signature }}
          </text>
        </view>
      </view>
      <button class="h-80 lh-80 bg-primary text-white mx-50 rounded-40 mb-40 text-center text-base" hover-class="opacity-80" @click="go">
        设置
      </button>
    </view>
  </Layout>
</template>

<script setup>
const gender = ref('male')
const userData = ref({})

onShow(() => {
  gender.value = uni.$store.userData?.gender === 1 ? 'male' : 'female'
  userData.value = uni.$store.userData
})

function go() {
  uni.navigateTo({ url: '/pages/user/setting' })
}
</script>
