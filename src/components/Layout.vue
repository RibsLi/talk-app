<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  showFooter: { type: Boolean, default: false }
})

// 设置页面标题
// watchEffect(() => props.title && uni.setNavigationBarTitle({ title: props.title }))
props.title && uni.setNavigationBarTitle({ title: props.title })
</script>

<template>
  <view>
    <view class="w-full fixed top-0 bg-default bottom-safe" :class="showFooter && 'pb-120'">
      <slot />
    </view>

    <Footer v-if="showFooter" />
  </view>
</template>
