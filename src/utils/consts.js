const config = require('../config/index');
// 当前 host
const HOST = window.location.host

// 开发
const DEVELOPMENT = 'DEVELOPMENT'

// 生产
const PRODUCTION = 'PRODUCTION'

// 当前环境
const ENV = (function () {
  if (HOST === 'localhost:2333') {
    return DEVELOPMENT
  } else {
    return PRODUCTION
  }
})()

// 基础地址
const BASE_URL = (function () {
  if (ENV === DEVELOPMENT) {
    return `https://${config.pro.apiHost}`;
  } else {
    return `https://${config.pro.apiHost}`;
  }
})()

// 接口地址
const API_URL = BASE_URL + '/api/v1'

// 分页大小
const PAGE_SIZE = 10

// 网站标题
const TITLE = 'XXXXXXX'

export default {
  BASE_URL,
  API_URL,
  PAGE_SIZE,
  TITLE
}
