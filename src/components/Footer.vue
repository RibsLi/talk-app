<template>
  <view class="w-full h-120 flex justify-around items-center text-center fixed bottom-[env(safe-area-inset-bottom)] bg-white z-10">
    <view v-for="item in tabbar" :key="item.value" @click="$store.currentTabbar = item.value">
      <uni-badge :text="item.count" absolute="rightTop" size="small" :offset="[3, 3]" :custom-style="{backgroundColor:'#3EC8A4'}">
        <view class="flex-1 flex flex-col items-center">
          <image :src="$store.currentTabbar === item.value ? item.activeIcon : item.icon" class="w-50 h-50 mb-5" />
          <text :class="$store.currentTabbar === item.value ? 'text-primary' : 'text-main-3'" class="text-base">
            {{ item.name }}
          </text>
        </view>
      </uni-badge>
    </view>
  </view>
</template>

<script setup>
// 底部导航
const tabbar = [
  {
    icon: 'https://qiniu.shidiankeji.com/imgs/35556122-110e-432a-b52f-0c50356355cd.png',
    activeIcon: 'https://qiniu.shidiankeji.com/imgs/91baf18e-bbc0-4a12-8512-768254695d46.png',
    name: '畅聊',
    value: 'home',
    count: 100
  },
  {
    icon: 'https://qiniu.shidiankeji.com/imgs/f6fbee12-28d6-490b-a36f-141482a8d844.png',
    activeIcon: 'https://qiniu.shidiankeji.com/imgs/e6529aae-3da5-44d9-a229-f892b431a32c.png',
    name: '通讯录',
    value: 'communication',
    count: 2
  },
  {
    icon: 'https://qiniu.shidiankeji.com/imgs/3e97efac-2212-4984-9ed4-58f1adc498b7.png',
    activeIcon: 'https://qiniu.shidiankeji.com/imgs/5b65c9a4-762d-4665-82c6-754c4170c07a.png',
    name: '动态',
    value: 'dynamically',
    count: 8
  },
  {
    icon: 'https://qiniu.shidiankeji.com/imgs/00a8e9cb-7da8-4fcd-9bb2-c128b14b33f3.png',
    activeIcon: 'https://qiniu.shidiankeji.com/imgs/2938f99b-3933-48db-8e46-042cf7d0045d.png',
    name: '我',
    value: 'user',
    count: 0
  }
]
</script>
