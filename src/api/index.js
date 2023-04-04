import urls from './urls'

const baseUrl = 'http://127.0.0.1:3000/api'

class API {
  constructor(globalData) {
    this.baseUrl = baseUrl
    this.globalData = globalData
    this.requestTaskList = []
    this.url = ''
  }

  getRequestParms(type) {
    const [url, method, requestType] = urls(type)
    const contentType = requestType === 1 ? 'application/x-www-form-urlencoded;charset=UTF-8' : 'application/json'
    return {
      url: url.includes('http') ? url : this.baseUrl + url,
      method,
      contentType
    }
  }

  resolve(
    type,
    data = {},
    options = {
      data: {},
      showErrorToast: true,
      addToRequestTaskList: false
    }
  ) {
    const { url, method, contentType } = this.getRequestParms(type)
    // 授权码
    const authorization = uni.$store.authorization || ''
    options.data = options.data || {}
    // options.data.authorization = authorization || ''
    data = { ...options.data, ...data }

    // 删除无用的键值
    for (const key in data) {
      if (data[key] === undefined || data[key] === null) {
        delete data[key]
      }
    }

    const callback = (res, resolve, code) => {
      if (resolve) {
        resolve({
          code,
          data: res.data.data || res.data,
          message: res.data.message
        })
      }
    }

    return new Promise((resolve, reject) => {
      const requestTask = uni.request({
        url,
        method,
        data,
        header: {
          'Content-Type': contentType,
          authorization
        },
        success(res) {
          const statusCode = Number(res.statusCode)
          const code = Number(res.data.code)
          if (statusCode === 200 && code !== 1) {
            if (code === 0) {
              resolve(
                res.data.data ?? {
                  code,
                  data: res.data.data,
                  message: res.data.message
                }
              )
            } else if (code === 500) {
              console.error('======请求错误(code===500)======')
              callback(res, resolve, code)
            } else {
              console.warn('======请求(code!==0)======')
              callback(res, resolve, code)
            }
          } else if (statusCode === 500) {
            console.error('======请求失败(500)======')
            callback(res)
            if (options.showErrorToast) {
              uni.showToast({
                title: res.data?.resp_msg || res.data?.message || '网络繁忙，请稍后重试',
                icon: 'none'
              })
            }
            reject(res.data || res)
          } else {
            console.error('======请求失败(异常)======')
            callback(res)
            if (options.showErrorToast) {
              uni.showToast({
                title: res.data.message || '网络繁忙，请稍后重试',
                icon: 'none'
              })
            }
            reject(res.data || res)
          }
        },
        fail(e) {
          console.error('======请求失败======')
          callback(e)
          reject(e)
        }
      })

      if (options.addToRequestTaskList) {
        this.requestTaskList.push(requestTask)
      }
    })
  }

  // 取消所有请求
  requestTaskListAbort() {
    this.requestTaskList.forEach(task => task.abort())
    this.requestTaskList = []
  }
}

export default new API(URL)
