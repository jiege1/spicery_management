import {action, isObservableProp, extendObservable} from 'mobx';
// isObservableProp 检测是非
export default class Base {

  /**
   * 扩展 observable 属性
   * @param observableProps
   */
  @action extend(observableProps) { // 把传过来的东西 变成observable属性
    if (observableProps) {
      extendObservable(this, observableProps);
    }
  }

  @action update(updateKeys) {
    Object.keys(updateKeys).forEach(key => {
      if (isObservableProp(this, key)) { // 检查是否是一个observable属性
        this[key] = updateKeys[key];
      } else { // 不允许更新非监听状态的键值
        console.warn(`${key} is not an observable key!`);
      }
    });
  }

}