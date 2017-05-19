/**
 * Created by itxuye on 2017/2/20.
 */
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {IntlProvider,} from 'react-intl';
import CRoutes from './route/index'
import 'antd-mobile/dist/antd-mobile.css'
import  configureStore  from './store/index'
import './index.less'
// global
import moment from 'moment';
import lodash from 'lodash';
window.moment = moment;
window._ = lodash;

import LocaleProvider          from 'antd-mobile/lib/locale-provider';

// for PolyFill
import ES6Symbol      from 'es6-symbol';
import ObjectAssign   from 'object-assign';
if (!window.Symbol) {
  window.Symbol = ES6Symbol
}
if (!window.Object.assign) {
  window.Object.assign = ObjectAssign
}

export const store = configureStore();


function start() {
  ReactDOM.render(
    <Provider store={store}>
        <CRoutes/>
    </Provider>
    ,
    document.getElementById('app')
  );
}


start();
