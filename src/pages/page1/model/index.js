import Base from 'store/model/base';
import {observable, action, computed, toJS} from 'mobx';
import {queryList} from '../../../api/page1Api';

export default class Page1 extends Base {
  @observable page = 0;
  @observable list = [];

  constructor() {
    super();
    // console.log(this);
  }

  @computed get toJsLit() {
    return toJS(this.list);
  }

  @action async queryList(params) {
    this.list = await queryList(params);
  }
}