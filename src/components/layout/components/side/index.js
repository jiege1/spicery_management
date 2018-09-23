import React from 'react';
import Folder from './components/folder';
import { Layout as AntLayout,  Menu as AntMenu, Icon, Switch, Radio } from 'antd';
import css from './index.less';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';
import routeData from 'common/const/route';
import {Link, withRouter} from 'react-router-dom';

const { Sider} = AntLayout;
const {SubMenu, Item: MenuItem} = AntMenu;

@withRouter
@inject('store')
@observer
export default class Side extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  get selectedKey() {
    let nextSelect = 'home';
    const pathArr = this.props.location.pathname.split('/');
    if (pathArr[pathArr.length - 1] && pathArr[pathArr.length - 1].length) {
      nextSelect = pathArr[pathArr.length - 1];
    }
    return [nextSelect];
  }

  onCollapse(collapsed) {
    // console.log('collapsed===', collapsed);
    // this.setState({ collapsed });
  }

  renderNavItems() {
    const renderMenu = (item) => {
      // SubMenu
      if (item.children.length) {
        const props = {
          key: item.key,
          title: (
            <span>
              {!!item.icon && <Icon type={item.icon} />}
              <span>{item.label}</span>
            </span>
          ),
        };
        return (
          <SubMenu {...props}>
            {item.children.map(child => renderMenu(child))}
          </SubMenu>
        );
      }
      // console.log(item.path);
      if (item.path) {
        return (
          <MenuItem key={item.key}>
            <Link to={item.path}>
              {!!item.icon && <Icon type={item.icon} />}
              <span>{item.label}</span>
            </Link>
          </MenuItem>
        );
      }

      return (
        <MenuItem key={item.key}>
          {!!item.icon && <Icon type={item.icon} />}
          {item.label}
        </MenuItem>
      );
    };

    return routeData.map(item => renderMenu(item));
  }

  renderMenu() {
    const {sideTheme} = this.props.store.app;
    const props = {
      selectedKeys: this.selectedKey,
      mode: 'inline',
      theme: sideTheme,
    };
    return (
      <AntMenu {...props}>
        {this.renderNavItems()}
      </AntMenu>
    );
  }

  renderDarkSwitch() {
    const {app, app: {sideTheme, sideCollapsed}} = this.props.store;
    // console.log(sideCollapsed);
    const renderRadio = () => (
      <Radio.Group
        value={sideTheme}
        buttonStyle="solid"
        size="small"
        onChange={(e) => {
          app.update({
            sideTheme: e.target.value,
          });
        }}>
        <Radio.Button value="light">亮色</Radio.Button>
        <Radio.Button value="dark">暗色</Radio.Button>
      </Radio.Group>
    );

    const renderSwitch = () => (
      <Switch
        checkedChildren="暗色"
        unCheckedChildren="亮色"
        checked={sideTheme === 'dark'}
        onChange={(checked) => {
          app.update({
            sideTheme: checked ? 'dark' : 'light',
          });
        }} />
    );

    return (
      <div className={css.themeBox}>
        {
          sideCollapsed ? renderSwitch() : renderRadio()
        }
      </div>
    );
  }

  render() {
    const {sideCollapsed, sideTheme} = this.props.store.app;
    const props = {
      className: classNames(css.side, {[css.light]: sideTheme === 'light'}),
      collapsible: true,
      trigger: null,
      collapsed: sideCollapsed,
      onCollapse: this.onCollapse.bind(this)
    };
    return (
      <Sider {...props}>
        <div className={css.sideBox}>
          <div className={css.logoBox}>
            {
              sideCollapsed ? 'G' : 'LOGO'
            }
          </div>
          <div className={css.theme}>
            {this.renderDarkSwitch()}
          </div>
          {this.renderMenu()}
          <Folder />
        </div>
      </Sider>
    );
  }
}