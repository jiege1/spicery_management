import React from 'react';
import css from './index.less';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';
import {Icon} from 'antd';

@inject('store')
@observer
export default class Folder extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const {app, app: {sideCollapsed, sideTheme}} = this.props.store;
    const props = {
      type: sideCollapsed ? 'right-circle' : 'left-circle',
      theme: 'outlined',
      className: css.icon,
      onClick: () => {
        app.update({
          sideCollapsed: !sideCollapsed
        });
      },
    };
    return (
      <div className={classNames(css.folder, {[css.dark]: sideTheme === 'dark'})}>
        <Icon {...props}/>
      </div>
    );
  }
}