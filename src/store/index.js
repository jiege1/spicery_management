import { observable, configure } from 'mobx';
import Base from './model/base';
import App from './model/app';

// configure({
//   enforceActions: true, // 不允许在动作之外进行状态修改
// });

/**
 * 全局唯一的store
 */
class store extends Base {
  @observable app = new App();
  constructor() {
    super();
    // console.log(this);
  }
}
export default new store();