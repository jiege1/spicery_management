import axios from 'axios';
import {message} from 'antd';

export default class Ajax {

  static query({url, params = {}, method = 'get', successLabel = null}) {
    // console.log(url);
    const api = eval(`CFG.api.${url}`);
    // console.log(api);
    if (method === 'get') { // get请求 外面包一层{}
      method = {method};
    }

    return axios[method](api, params).then(res => {

      const {data, code} = res.data;

      return new Promise((resolve, reject) => {

        if (!code) {
          resolve(data);
          // 删除时全局弹窗的提示
          if (successLabel) {
            if (data.success) {
              message.success(`${successLabel}成功！`);
            } else {
              message.error(`${successLabel}失败！`);
            }
          }
        } else {
          reject(data);
        }
      });
    });
  }
}
