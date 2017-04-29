/**
 * Created by itxuye on 2017/2/22.
 */
'use strict';
import axios from 'axios';
import consts from './consts';
import {Control} from 'react-keeper';
import auth from './auth';
import {Toast} from 'antd-mobile';
//基于axios的请求封装,使用Promise

axios.defaults.timeout = 60 * 1000;
axios.defaults.baseURL = consts.BASE_URL;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (auth.isLogin()) {
      config.headers.Authorization = `Bearer ${auth.getToken()}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          auth.destroy();
          Control.replace('/login');
          break;
        case 500 :
          Toast.show("Response error", 3)
          break
        case 502:
          Toast.show("Response error", 3)
          break
      }
    }
    return Promise.reject(error.response.data)
  });

export default axios;


/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        // reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}


