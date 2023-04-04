<!-- 登录 -->
<template>
  <Layout title="登录">
    <image src="https://qiniu.shidiankeji.com/imgs/85e86130-af08-42f1-aea9-497eeabdf850.png" mode="aspectFill" class="w-full h-full absolute top-0 z--1" />
    <view class="w-full h-full flex flex-col justify-center items-center box-border px-50">
      <view
        class="w-full h-450 flex flex-col justify-around rounded-20 p-30 box-border border-solid border border-divider"
        style="backdrop-filter: blur(5px); background-color: rgba(255, 255, 255, 0.6);"
      >
        <view>
          <uni-forms ref="valiForm" :rules="rules" :model-value="valiFormData" :label-width="70">
            <uni-forms-item label="用户名" name="username">
              <uni-easyinput v-model="valiFormData.username" placeholder="请输入用户名" :styles="{borderColor: '#888'}" maxlength="20" />
            </uni-forms-item>
            <uni-forms-item label="密码" name="password">
              <uni-easyinput v-model="valiFormData.password" type="password" placeholder="请输入密码" :styles="{borderColor: '#888'}" maxlength="20" />
            </uni-forms-item>
            <uni-forms-item v-if="!login" label="确认密码" name="rePassword">
              <uni-easyinput v-model="valiFormData.rePassword" type="password" placeholder="请输入确认密码" :styles="{borderColor: '#888'}" maxlength="20" />
            </uni-forms-item>
          </uni-forms>
        </view>
        <view class="text-main-2 text-base  text-right">
          {{ login ? '没有账号？' : '有账号？' }}
          <text class="text-primary" @click="toggle">
            {{ login ? '去注册' : '去登录' }}
          </text>
        </view>
      </view>
      <button class="w-full h-80 lh-80 bg-primary text-white mx-50 rounded-40 mt-100 text-center text-lg" hover-class="bg-primary opacity-80" @click="submit">
        {{ login ? '登录' : '注册' }}
      </button>
    </view>
  </Layout>
</template>

<script setup>
const login = ref(true)
const valiForm = ref()
const valiFormData = reactive({
  username: 'admin',
  password: '123456',
  rePassword: ''
})
// 校验规则
const rules = {
  username: {
    rules: [{
      required: true,
      errorMessage: '用户名不能为空'
    }]
  },
  password: {
    rules: [{
      required: true,
      errorMessage: '密码不能为空'
    }]
  },
  rePassword: {
    rules: [{
      required: true,
      errorMessage: '确认密码不能为空'
    }, {
      validateFunction(rule, value, data, callback) {
        if (data.password !== data.rePassword) {
          const str = '两次输入密码不一致!'
          return callback(str)
        }
      }
    }
    ]
  }
}

// 切换登录和注册事件
function toggle() {
  for (const item in valiFormData) {
    valiFormData[item] = ''
  }
  login.value = !login.value
}

// 表单提交事件
function submit() {
  valiForm.value.validate().then(res => {
    if (login.value) {
      // 登录请求
      api.resolve('login', valiFormData).then(res => {
        uni.setStorageSync('userData', res)
        uni.setStorageSync('authorization', res.token)
        uni.$store.userData = res
        uni.$store.authorization = res.token
        uni.redirectTo({ url: '/pages/index/index' })
      })
    } else {
      // 注册请求
      api.resolve('register', valiFormData).then(res => {
        uni.showToast({
          title: res.message,
          icon: 'none'
        })
        login.value = true
      })
    }
  }).catch(err => {
    console.info('err', err)
  })
}
</script>
