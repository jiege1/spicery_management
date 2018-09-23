import { observable } from 'mobx';
import Base from '../base';

export default class App extends Base {
  @observable sideCollapsed = false;
  @observable sideTheme = 'dark'; // 'dark' : 'light'
}
