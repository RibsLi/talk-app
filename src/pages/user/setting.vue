<!-- 设置 -->
<template>
  <Layout title="设置">
    <view class="w-full h-full flex flex-col justify-between">
      <view class="flex flex-col px-30 pt-20">
        <view v-for="item in userinfo" :key="item.type" class="flex justify-between items-center">
          <text class="min-w-80 text-base text-main-1">
            {{ item.name }}
          </text>
          <view class="h-90 flex-1 flex items-center border-b-solid border-b-1 border-divider">
            <text class="flex-1 line-clamp-1 text-sm text-main-2">
              {{ item.data }}
            </text>
            <image :src="$icons.arrowRight.icon" class="w-25 h-25" />
          </view>
        </view>
      </view>
      <button class="h-80 lh-80 bg-primary text-white mx-50 mb-100 rounded-40 text-center text-base" hover-class="bg-primary opacity-80" @click="logout">
        退出登录
      </button>
    </view>
  </Layout>
</template>

<script setup>
const userinfo = ref([
  { name: '昵称', type: 'nickname', data: '德玛西亚' },
  { name: '性别', type: 'gender', data: '男' },
  { name: '生日', type: 'birthday', data: '9999-09-09' },
  { name: '电话', type: 'phone', data: '188*****8888' },
  { name: '邮箱', type: 'email', data: '88888@qq.com' },
  { name: '密码', type: 'passwords', data: '' }
])

function logout() {
  uni.showModal({
    content: '退出登录',
    confirmText: '退出',
    confirmColor: '#f00'
  }).then(res => {
    res.confirm && uni.redirectTo({ url: '/pages/index/login' })
  })
}
</script>

<style scoped>
:deep(.uni-modal__bd) {
  color: #070707;
  font-size: 32rpx;
}
:deep(.uni-modal__btn, .uni-modal__btn_primary) {
  font-size: 32rpx;
}
</style>
