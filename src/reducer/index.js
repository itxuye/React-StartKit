/**
 * Created by itxuye on 2017/2/21.
 */
'use strict';

import {combineReducers} from 'redux-immutable';

import {reducer as form} from 'redux-form/immutable'


const reducer = combineReducers({
  form,
});

export default reducer;