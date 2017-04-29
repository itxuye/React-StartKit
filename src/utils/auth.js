import storage from './helpers/storage'
import base from './helpers/base'

const TOKEN = 'TOKEN'

let token = null

export default {
  /**
   * 是否登录
   */
  isLogin () {
    let isTure = !base.isEmpty(this.getToken());
    return isTure
  },

  /**
   * 设置 token
   * @param value
   */
  setToken (value) {
    token = value
    storage.set(TOKEN, token)
  },

  /**
   * 获取 token
   */
  getToken () {
    let res =  storage.get(TOKEN)||''
    return res
  },

  /**
   * 销毁 token 和 user
   */
  destroy () {
    token = null
    storage.remove(TOKEN)
  }
}
