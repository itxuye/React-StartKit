/**
 * Created by itxuye on 2017/4/28.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toast, Grid, WhiteSpace, InputItem, List, TextareaItem, DatePicker, Button, Picker} from 'antd-mobile';

let keySet = new Set();

class demo1 extends Component {
  constructor(props) {
    super(props)
    this.formSubmmitClick = this.formSubmmitClick.bind(this);
  }


  render() {
    return (
      <div style={{padding: '20px'}}>
        <Button onClick={this.formSubmmitClick}>兜兜扫一扫测试</Button>
      </div>)
  }

  formSubmmitClick() {
    Toast.show('兜兜扫一扫', 2)
    if (window.doudou) {
      doudou.scanQRCode({
        success: (res) => {
          if (res.code === 0) {
            Toast.show('扫码结果：' + res, 10);
          } else {
            // res.code非0时，表示是异常情况
            Toast.show('扫码结果：' + res, 10);
          }
        }
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}


export default connect(mapStateToProps, null)(demo1);