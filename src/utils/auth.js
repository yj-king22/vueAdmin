import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
// const UUID = 'Admin-UUID'
// const ShopID = 'Admin-ShopID'
// const Role = 'Admin-Role'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// export function getUUID() {
//   return Cookies.get(UUID)
// }
//
// export function setUUID(uuid) {
//   return Cookies.set(UUID, uuid)
// }
//
// export function removeUUID() {
//   return Cookies.remove(UUID)
// }
//
// export function getShopID() {
//   return Cookies.get(ShopID)
// }
//
// export function setShopID(shop_id) {
//   return Cookies.set(ShopID, shop_id)
// }
//
// export function removeShopID() {
//   return Cookies.remove(ShopID)
// }
//
// export function getRole() {
//   return Cookies.get(Role)
// }
//
// export function setRole(role) {
//   return Cookies.set(Role, role)
// }
//
// export function removeRole() {
//   return Cookies.remove(Role)
// }
