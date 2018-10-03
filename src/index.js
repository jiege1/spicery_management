// __webpack_public_path__ = CFG.__publicPath__;
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import store from 'store';
import 'moment/locale/zh-cn';
import './index.less';

ReactDom.render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Router />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);