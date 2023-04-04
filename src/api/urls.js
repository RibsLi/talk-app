/**  [请求地址, 请求方式, contentType]
 * contentType === 1 : 'application/x-www-form-urlencoded;charset=UTF-8'
 * contentType === 2 : 'application/json'
 */
export default function(type) {
  const urlObj = {
    register: ['/register', 'post', 1], // 注册
    login: ['/login', 'post', 1], // 登录
    getUserinfo: ['/getUserinfo', 'get', 1], // 获取用户信息
    updateUserinfo: ['/updateUserinfo', 'post', 1] // 修改用户信息
  }

  return urlObj[type] || ''
}
