/**
 * Created by itxuye on 2017/4/28.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import 'moment/locale/zh-cn';
import './index.less'
class demo3 extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="wrap">
        <div className="header">
        <div className="header1">
          <p>header</p>
          <p>header</p>
        </div>
        </div>

        <div className="main">
          <div>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          <p>这里是主体区域</p>
          </div>
        </div>
        <div className="footer">
        <div className="footer1">
          <p>footer</p>
          <p>footer</p>
        </div>
        </div>
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}


export default connect(mapStateToProps, null)(createForm()(demo3));