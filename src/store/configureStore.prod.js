/**
 * Created by itxuye on 2017/4/28.
 */
'use strict'
import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'
import { Map } from 'immutable';

// thunk 允许我们 dispatch() 函数
let buildStore = compose(applyMiddleware(thunk))(createStore)

const initialState = Map();
export default function configureStore() {
  const store = buildStore(rootReducer, initialState)
  return store
}