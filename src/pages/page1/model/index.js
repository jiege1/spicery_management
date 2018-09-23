import Base from 'store/model/base';
import {observable, action} from 'mobx';
// import {queryList} from '../../../api/page1Api';


export default class Page1 extends Base {
  @observable page = 0;
  @observable list = [];

  constructor() {
    super();
    // console.log(this);
  }

  // @action async queryList(params) {
  //   this.list = await queryList(params)
  // }
}