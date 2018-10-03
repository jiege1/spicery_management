import React from 'react';
import Loadable from 'react-loadable';
import {Spin} from 'antd';
import store from 'store';
// import lazyComponent from './lazyComponent';

const loading = (err) => {
  if (err.error) {
    console.error(err.error);
  }

  return (
    <Spin size="large" style={{width: '100%', margin: '40px 0'}}/>
  );
};

const lazyComponent = (path, model) => {
  let loader = {
    component: () => import(`pages/${path}`)
  };

  // 动态加载model
  if (model) {
    if (typeof model !== 'string') model = path;
    loader[model] = () => import(`pages/${path}/model`);
  }

  return Loadable.Map({
    loader,
    loading,
    render(loaded, props) {

      // 将model动态挂载到 store 上
      if (loaded[model]) {
        const Model = loaded[model].default;
        if (!store[model]) {
          store[model] = new Model();
        }
      }
      let C = loaded.component.default;
      return <C {...props}/>;
    }
  });
};


const routeData = [
  {
    key: 'home',
    label: '首页',
    // noSideShow: true,
    path: '/',
    icon: 'desktop',
    desc: '首页',
    component: lazyComponent('home', true),
    isAuth: true,
    children: [],
  },
  {
    key: 'page1',
    label: '页面1',
    // noSideShow: true,
    path: '/page1',
    icon: 'desktop',
    desc: '页面1',
    // component: Page1,
    component: lazyComponent('page1', true),
    isAuth: true,
    children: [],
  },
];

export default routeData;