/**
 * Created by itxuye on 2017/2/22.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {Route, HashRouter, Control, BrowserRouter, MemoryRouter} from 'react-keeper';
import demo1 from '../container/demo1.js'

const RouteIndex = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};


class CRoutes extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={RouteIndex}/>
          <Route index miss path='test' component={demo1}/>
        </div>
      </HashRouter>
    )
  }
}

export default CRoutes;
