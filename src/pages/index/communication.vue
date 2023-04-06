<!-- 通讯录 -->
<template>
  <Layout title="通讯录" show-footer>
    <scroll-view scroll-y class="h-full">
      <view class="p-20">
        <DialogueCard v-for="item in list" :key="item" :content="item" :type="2" />
      </view>
    </scroll-view>
  </Layout>
</template>

<script setup>
const list = ref([
  { name: '新朋友', type: 'newFriend', icon: 'https://qiniu.shidiankeji.com/imgs/d3685373-d795-4823-b275-92f053bcc450.png', count: 100 },
  { name: '群聊', type: 'group', icon: 'https://qiniu.shidiankeji.com/imgs/6237ecd8-c6bf-403a-be2a-eb99b94857c5.png' },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9' }
])
</script>
