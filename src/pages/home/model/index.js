import Base from 'store/model/base';
import {observable} from 'mobx';

export default class Home extends Base {
  @observable test = 0;
}