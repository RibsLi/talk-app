<!-- 新的朋友 -->
<template>
  <Layout title="新的朋友">
    <view class="bg-primary">
      <uni-search-bar placeholder="账号/手机号" cancel-button="none" @confirm="search" />
    </view>
    <scroll-view scroll-y class="h-full">
      <view class="p-20">
        <template v-if="list.length">
          <DialogueCard v-for="item in list" :key="item" :content="item" :type="3" />
        </template>
        <view v-else class="w-full flex flex-col items-center rounded-10 overflow-hidden">
          <image src="https://img.zcool.cn/community/01e2345e6b73aca80120a895bff125.gif" mode="aspectFill" />
          <text class="text-base text-main-3 mt-30">
            暂无相关内容
          </text>
        </view>
      </view>
    </scroll-view>
  </Layout>
</template>

<script setup>
const list = ref([
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 0 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 1 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 0 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 1 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 0 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 1 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 0 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', isFriend: 1 }
])

// 搜索事件
function search(e) {
  api.resolve('search', { keywords: e.value }).then(res => {
    console.log('搜索内容', res)
    list.value = res
  })
}
</script>
