<!-- 会话 -->
<template>
  <Layout title="会话">
    <scroll-view scroll-y class="h-full">
      <view class="p-20">
        <view v-for="item in list" :key="item.id">
          <view class="w-full text-main-3 text-sm text-center mt-40 mb-30">
            2023-03-31 00:00:00
          </view>
          <view class="flex mb-20" :class="item.type === 2 && 'flex-row-reverse'">
            <image src="https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9" mode="aspectFill" class="w-65 h-65 rounded-10" />
            <view class="flex-1 flex items-center rounded-10 text-base lh-35 text-main-1 text-left p-20 tracking-widest relative" :class="item.type === 1 ? 'mr-85 ml-20 bg-white left' : 'ml-85 mr-20 bg-primary right'">
              会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话会话
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </Layout>
</template>

<script setup>
const list = ref([
  { name: '德玛西亚', type: 1, avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。' },
  { name: '德玛西亚', type: 2, avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。' },
  { name: '德玛西亚', type: 1, avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。' }
])
</script>

<style scoped>
.left:before {
  content: '';
  position: absolute;
  top: 27rpx;
  left: -20rpx;
  border-top: 5px solid transparent;
  border-right: 5px solid #fff;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
}
.right:before {
  content: '';
  position: absolute;
  top: 27rpx;
  right: -20rpx;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #3EC8A4;
}
</style>
