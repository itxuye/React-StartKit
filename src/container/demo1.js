/**
 * Created by itxuye on 2017/4/28.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toast, Grid, WhiteSpace, InputItem, List, TextareaItem, DatePicker, Button, Picker} from 'antd-mobile';
import {createForm} from 'rc-form';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

class demo1 extends Component {
  constructor(props) {
    super(props)
  }

  pickerToString(v) {
    return String(v[0])
  }

  render() {
    let arr = [1, 2, 3, 4];
    let brr = [{label: '111', value: '111'}, {label: '222', value: '222'}, {label: '333', value: '333'}]
    const {getFieldProps} = this.props.form;
    return (
      <div style={{padding: '20px'}}>

        {arr.map((data, i) => {
          if (data == 1 || data == 2) {
            return (
              <Picker
                {...getFieldProps(String(i), {
                  initialValue: ['111'],
                  normalize: this.pickerToString,
                })}
                cols={1}
                key={i}
                data={brr}>
                <List.Item arrow="horizontal">{data}</List.Item>
              </Picker>
            )
          }

        })
        }
        <Button onClick={() => {
          this.props.form.validateFields((error, values) => {
            console.log(values)
          });
        }}>Submit</Button>
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}


export default connect(mapStateToProps, null)(createForm()(demo1));