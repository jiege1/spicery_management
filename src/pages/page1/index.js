import React from 'react';
import {observer, inject} from 'mobx-react';
import {Card} from 'antd';
import SearchBar from 'components/searchBar';

@inject('store')
@observer
export default class Page1 extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    // this.props.store.queryList({pageSize: 10});
    // console.log(this.props.store);
  }

  queryList() {

  }

  render() {
    const searchBarProps = {
      searchList: [
        {
          key: 'customerName',
          label: '姓名：',
          placeholder: '请输入姓名',
          type: 'input',
        },
      ],
      addTitle: '添加购买服务记录',
      onAdd: () => {
        this.setState({
          visible: true,
        });
      },
      onSearch: (value) => {
        this.queryList(value);
      },
    };
    return (
      <div>
        <Card title={'Card title'}>
          <SearchBar {...searchBarProps}/>
        </Card>
      </div>
    );
  }
}