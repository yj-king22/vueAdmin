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

export function getInfo(token, uuid, id) {
  return request({
    url: '/api/AdminMessage/messageDetails',
    method: 'post',
    data: {
      token,
      uuid,
      id
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
