<!-- 对话框卡片 -->
<template>
  <view class="flex items-center" :class="$attrs" @click="go">
    <uni-badge :text="content.count" absolute="rightTop" size="small" :offset="[12, 5]" :custom-style="{backgroundColor:'#3EC8A4'}">
      <image :src="content.icon || content.avatar" class="rounded-10 mr-20" mode="aspectFill" :class="type === 1 ? 'w-90 h-90' : 'w-65 h-65 '" />
    </uni-badge>
    <view class="min-h-90 box-border flex-1 flex items-center border-b-solid border-b-1 border-divider py-20">
      <view class="flex-1 flex flex-col justify-center">
        <text class="line-clamp-1 text-main-1 text-base">
          {{ content.name }}
        </text>
        <text v-if="type === 1" class="text-sm line-clamp-1 text-main-3 mt-20">
          {{ content.message }}
        </text>
      </view>
      <view v-if="type === 3" class="w-90 h-35 lh-35 rounded-40 text-center text-xs" hover-class="opacity-80" :class="content.isFriend !== 0 ? 'bg-primary text-white' : 'text-main-3'" @click.stop="addClick">
        {{ content.isFriend !== 0 ? '添加' : '已添加' }}
      </view>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  type: { type: Number, default: 1 }, // 1:首页 2:通讯录 3:新朋友
  content: { type: Object, default: () => {} }
})

function go() {
  let url = ''
  props.type === 1 && (url = '/pages/dialogue/index')
  if (props.type === 2) {
    props.content.type === 'newFriend' && (url = '/pages/communication/new-friend')
  }
  uni.navigateTo({ url })
}

function addClick() {
  props.content.isFriend !== 0 && console.log('添加好友')
}
</script>
