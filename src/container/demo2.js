/**
 * Created by itxuye on 2017/4/28.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toast, Grid, WhiteSpace, Tabs, List, TextareaItem, DatePicker, Button, Picker} from 'antd-mobile';
import {createForm} from 'rc-form';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

const TabPane = Tabs.TabPane;

const datas = ['审批拒绝3(1)','撤回3(1)','未提交3(1)','已提交3(1)','业务审批通过3(1)','财务审核通过3(1)','审批通过3(1)','已支付3(1)']

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const makeTabPane = key => (
  <TabPane tab={datas[key]} key={key}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
      {`选项${key}内容`}
    </div>
  </TabPane>
);

const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push(makeTabPane(i));
  }
  return result;
};

const TabExample = () => (
  <div>
    <Tabs swipeable={false}  onChange={callback} pageSize={3} >
      {makeMultiTabPane(datas.length)}
    </Tabs>
    <WhiteSpace />
  </div>
);


function mapStateToProps(state) {
  return {
    state
  }
}


export default connect(mapStateToProps, null)(createForm()(TabExample));