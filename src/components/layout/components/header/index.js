import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import {Layout} from 'antd';
const { Header: AntdHeader } = Layout;

export default class Header extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(this.props.store);
  }

  render() {
    return (
      <div className={css.header}>
        Header
      </div>
    );
  }
}