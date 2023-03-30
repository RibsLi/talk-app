<!-- 动态 -->
<template>
  <Layout title="动态" show-footer>
    <scroll-view scroll-y class="h-full">
      <view v-for="item in 40" :key="item" class="bg-red h-60 border-b">
        动态{{ item }}
      </view>
    </scroll-view>
  </Layout>
</template>

<script setup>
</script>
