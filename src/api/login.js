import request from '@/utils/request'

export function login(phone, password) {
  return request({
    url: '/api/AdminLogin/signIn',
    method: 'post',
    data: {
      phone,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
