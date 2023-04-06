<!-- 畅聊首页 -->
<template>
  <Layout title="畅聊" show-footer>
    <scroll-view scroll-y class="h-full">
      <uni-swipe-action>
        <uni-swipe-action-item v-for="item in list" :key="item" :threshold="0" :right-options="options" @click="deleteEv">
          <view class="p-20">
            <DialogueCard :content="item" />
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </scroll-view>
  </Layout>
</template>

<script setup>
const options = [{ text: '删除', style: { backgroundColor: '#FF5F5F' } }]
const list = ref([
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 },
  { name: '德玛西亚', type: 'friend', avatar: 'https://tse1-mm.cn.bing.net/th/id/OET.69e3368a10d64e6c9d422a8cad70723b?w=272&h=272&c=7&rs=1&o=5&pid=1.9', message: '德玛西亚万岁，人在塔在。', count: 100 }
])

function deleteEv() {
  console.log('删除事件')
}
</script>
