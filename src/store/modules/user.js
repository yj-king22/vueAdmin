import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken, getUUID, setUUID, removeUUID, removeShopID, getShopID, setShopID, getRole, setRole, removeRole } from '@/utils/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    uuid: '',
<<<<<<< HEAD
    shopId: '',
=======
    shop_id: '',
>>>>>>> 20197a74b2ddd57dadaaa3d70a4696405152930b
    role: 0,
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UUID: (state, uuid) => {
      state.uuid = uuid
    },
<<<<<<< HEAD
    SET_SHOPID: (state, shopId) => {
      state.token = shopId
    },
    SET_ROLE: (state, role) => {
      state.uuid = role
=======
    SET_SHOPID: (state, shop_id) => {
      state.shop_id = shop_id
    },
    SET_ROLE: (state, role) => {
      state.role = role
>>>>>>> 20197a74b2ddd57dadaaa3d70a4696405152930b
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          // setUUID(data.uuid)
          // setShopID(data.shopId)
          // setRole(data.role)
          commit('SET_TOKEN', data.token)
          commit('SET_UUID', data.uuid)
<<<<<<< HEAD
          commit('SET_SHOPID', data.shopId)
=======
          commit('SET_SHOPID', data.shop_id)
>>>>>>> 20197a74b2ddd57dadaaa3d70a4696405152930b
          commit('SET_ROLE', data.role)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
<<<<<<< HEAD
        getInfo('5b63dad2859faA1533270738', 'ab82980d0-6334-59ca-bd2b-ff183e3af692', 1).then(response => {
=======
        getInfo(state.token, state.uuid, state.role).then(response => {
>>>>>>> 20197a74b2ddd57dadaaa3d70a4696405152930b
          const data = response.data
          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          //   commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_UUID', '')
          commit('SET_SHOPID', '')
          commit('SET_ROLE', '')
          commit('SET_ROLES', [])
          removeToken()
          // removeUUID()
          // removeRole()
          // removeShopID()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_UUID', '')
        commit('SET_SHOPID', '')
        commit('SET_ROLE', '')
        commit('SET_ROLES', [])
        removeToken()
        // removeUUID()
        // removeRole()
        // removeShopID()
        resolve()
      })
    }
  }
}

export default user
