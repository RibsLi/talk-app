<!-- 设置 -->
<template>
  <Layout title="设置">
    <view class="w-full h-full flex flex-col justify-between">
      <view class="flex flex-col px-30 pt-20">
        <view v-for="item in userinfo" :key="item.type" class="flex justify-between items-center" @click="userinfoClick(item)">
          <text class="min-w-80 text-base text-main-1">
            {{ item.name }}
          </text>
          <view class="h-90 flex-1 flex items-center border-b-solid border-b-1 border-divider">
            <text v-if="item.type !== 'birthday'" class="flex-1 line-clamp-1 text-sm text-main-2">
              {{ item.data || item.placeholder }}
            </text>
            <view v-if="item.type === 'birthday'" class="flex-1 line-clamp-1 text-sm text-main-2">
              <DatePicker :default-value="item.data || ''" @on-confirm="datePickerChange">
                {{ item.data || item.placeholder }}
              </DatePicker>
            </view>
            <image v-if="item.type !== 'username'" :src="$icons.arrowRight.icon" class="w-25 h-25" />
          </view>
        </view>
      </view>
      <button class="h-80 lh-80 bg-primary text-white mx-50 mb-100 rounded-40 text-center text-base" hover-class="bg-primary opacity-80" @click="logout">
        退出登录
      </button>

      <!-- 弹窗组件 -->
      <uni-popup ref="popup">
        <view class="w-600 rounded-10 bg-white overflow-hidden">
          <textarea v-model="textareaValue" :placeholder="`请填写新的${current.name}`" auto-height :maxlength="current.maxlength" class="p-30 box-border break-all" />
          <view class="flex justify-around items-center mt-10 border-t-1 border-solid border-divider border-x-none border-b-none">
            <view class="h-90 lh-90 flex-1 bg-white text-main-2 text-center text-lg border-r-1 border-solid border-divider border-y-none border-l-none" @click="dialogClick('cancel')">
              取消
            </view>
            <view class="h-90 lh-90 flex-1 bg-white text-primary text-center text-lg" @click="dialogClick('confirm')">
              确认
            </view>
          </view>
        </view>
      </uni-popup>
    </view>
  </Layout>
</template>

<script setup>
const userinfo = reactive([
  { name: '用户', type: 'username', maxlength: 20, placeholder: '请填写用户名称', data: '' },
  { name: '签名', type: 'signature', maxlength: 200, placeholder: '这个人很懒什么都没有留下~', data: '' },
  { name: '性别', type: 'gender', maxlength: 20, placeholder: '请选择您的性别', data: '' },
  { name: '生日', type: 'birthday', maxlength: 20, placeholder: '请选择您的生日', data: '' },
  { name: '电话', type: 'phone', maxlength: 20, placeholder: '请填写您的联系电话', data: '' },
  { name: '邮箱', type: 'email', maxlength: 20, placeholder: '请填写您的联系邮箱', data: '' },
  { name: '密码', type: 'passwords', maxlength: 20, placeholder: '******', data: '' }
])
const popup = ref()
const current = ref()
const textareaValue = ref()

watch(() => uni.$store.userData, () => handleUserinfo())

// 用户信息回显
handleUserinfo()
function handleUserinfo() {
  userinfo.map(item => {
    item.data = uni.$store.userData[item.type]
    if (item.type === 'gender') {
      item.data = item.data === 1 ? '男' : '女'
    }
    return item
  })
}

// 用户信息点击事件 -> 修改用户信息
function userinfoClick(val) {
  current.value = val
  if (val.type !== 'username' && val.type !== 'gender' && val.type !== 'birthday') return popup.value.open()
  if (val.type === 'gender') {
    return uni.showActionSheet({
      itemList: ['女', '男'],
      success: res => updateUserinfo(res.tapIndex),
      fail: err => console.info(err.errMsg)
    })
  }
}

// 弹窗按钮事件
function dialogClick(val) {
  val === 'cancel' && popup.value.close()
  val === 'confirm' && updateUserinfo(textareaValue.value)
}

// 日期选择事件
function datePickerChange(e) {
  current.value = { type: 'birthday' }
  updateUserinfo(e.dateValue)
}

// 更新用户信息
function updateUserinfo(val) {
  api.resolve('updateUserinfo', { [current.value.type]: val }).then(() => {
    getUserinfo()
    popup.value.close()
  })
}

// 获取用户信息
function getUserinfo() {
  api.resolve('getUserinfo').then(res => {
    uni.$store.userData = res
    uni.setStorageSync('userData', res)
  })
}

// 退出登录
function logout() {
  uni.showModal({
    content: '退出登录',
    confirmText: '退出',
    confirmColor: '#f00'
  }).then(res => {
    if (res.confirm) {
      uni.$store.userData = null
      uni.$store.authorization = ''
      uni.removeStorageSync('userData')
      uni.removeStorageSync('authorization')
      uni.redirectTo({ url: '/pages/index/login' })
    }
  })
}
</script>

<style scoped>
:deep(.uni-modal__bd) {
  color: #070707;
  font-size: 32rpx;
}
:deep(.uni-modal__btn, .uni-modal__btn_primary) {
  font-size: 32rpx;
}
/* :deep(.uni-modal__textarea) {
  font-size: 28rpx;
  background-color: #F6F6F6;
  color: #070707;
} */
</style>
