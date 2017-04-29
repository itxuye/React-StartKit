/**
 * Created by itxuye on 2017/4/28.
 */
'use strict';

import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'
import { Map } from 'immutable';

// thunk 允许我们 dispatch() 函数
let buildStore = compose(applyMiddleware(thunk, createLogger({ stateTransformer: state => state.toJS() })), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)
// 当前 host
const HOST = window.location.host
// 开发
const DEVELOPMENT = 'DEVELOPMENT'

// 生产
const PRODUCTION = 'PRODUCTION'

// 当前环境
const ENV = (function () {
  if (HOST === '127.0.0.1:8090') {
    return DEVELOPMENT
  } else {
    return PRODUCTION
  }
})()
//注意immutable
const initialState = Map();
export default function configureStore() {
  const store = buildStore(rootReducer, initialState)
  if (ENV === DEVELOPMENT && module.hot) {
    module.hot.accept('../reducer/index', () => {
      //替换Store中的Reducer
      store.replaceReducer(require('../reducer/index'));
    })
  }
  return store
}