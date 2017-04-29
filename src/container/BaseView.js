/**
 * Created by itxuye on 2017/1/11.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginRequest, updateEditText, hileOrShowTab} from '../action/index'
import {bindActionCreators} from 'redux';

class BaseView extends Component {
  constructor(props) {
    super(props);
    this.kind = '';
    console.log("=================constructor")
  }

  componentDidMount() {

  }

  componentDidMount() {
    console.log("=================componentDidMount")

  }

  componentWillUnmount() {
    console.log("=================componentWillUnmount")
    window.onorientationchange = null;
    const dispatch = this.props.dispatch;

  }

  componentDidUpdate() {
    console.log("=================componentDidUpdate")
  }

  componentWillReceiveProps(nextProps) {
    console.log("=================componentWillReceiveProps")
  }
}


export default BaseView;