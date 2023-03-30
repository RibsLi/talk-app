<template>
  <view>
    <Home v-if="$store.currentTabbar === 'home'" />
    <Dynamically v-if="$store.currentTabbar === 'dynamically'" />
    <Communication v-if="$store.currentTabbar === 'communication'" />
    <User v-if="$store.currentTabbar === 'user'" />
  </view>
</template>

<script setup>
import Home from './home.vue'
import Dynamically from './dynamically.vue'
import Communication from './communication.vue'
import User from './user.vue'
</script>
