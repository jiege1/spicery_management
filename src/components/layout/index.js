import React from 'react';
import css from './index.less';
import { Layout as AntLayout } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import Side from './components/side';
// import {observer, inject} from 'mobx-react';
import classnames from 'classnames';
const { Content, Footer: AntFooter, Header: AntHeader } = AntLayout;

//
// @inject('store')
// @observer
export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    // const {sideTheme} = this.props.store.app;, {[css.light]: sideTheme === 'dark'}
    return (
      <AntLayout className={css.layout}>
        <Side />
        <AntLayout className={css.container}>
          <AntHeader className={classnames(css.header)}>
            <Header />
          </AntHeader>
          <Content className={css.content}>
            {this.props.children}
          </Content>
          <AntFooter style={{textAlign: 'center'}}>
            <Footer />
          </AntFooter>
        </AntLayout>
      </AntLayout>
    );
  }
}