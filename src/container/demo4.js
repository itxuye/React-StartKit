/**
 * Created by itxuye on 2017/5/18.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import 'moment/locale/zh-cn';
import {Popup, ListView, List, SearchBar, Button, Icon, WhiteSpace, Tabs} from 'antd-mobile';
import './index.less'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
const {Item} = List;
const TabPane = Tabs.TabPane;
import {province} from 'antd-mobile-demo-data';

if (isIPhone) {
  maskProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    console.log(province)
    Object.keys(province).forEach((item, index) => {
      sectionIDs.push(item);
      dataBlob[item] = item;
      rowIDs[index] = [];

      province[item].forEach((jj) => {
        rowIDs[index].push(jj.value);
        dataBlob[jj.value] = jj.label;
      });
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
    };
  }

  render() {
    return (
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>custom header</span>}
        renderFooter={() => <span>custom footer</span>}
        renderSectionHeader={sectionData => (<div className="ih">{sectionData}</div>)}
        renderRow={rowData => (<Item>{rowData}</Item>)}
        className="fortest"
        style={{
          height: document.documentElement.clientHeight,
          overflow: 'auto',
        }}
        quickSearchBarStyle={{
          position: 'absolute',
          top: 20,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{padding: 25, textAlign: 'center'}}>rendering...</div>}
      />
    );
  }
}

class demo4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sel: '',
    };
  }

  render() {

    return (
      <div style={{padding: '0.15rem'}}>
        <Tabs swipeable={false} defaultActiveKey="1">
          <TabPane tab="国内城市" key="1">
            <Demo/>
          </TabPane>

          <TabPane tab="国际城市" key="2">
            <Demo/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}


export default connect(mapStateToProps, null)(demo4);