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
      <view class="h-80 lh-80 bg-primary text-white mx-50 rounded-40 mb-40 text-center text-base" @click="logout">
        退出登录
      </view>
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

function logout() { uni.navigateBack() }
</script>
