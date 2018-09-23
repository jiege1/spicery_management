import Mock, { Random } from 'mockjs';
import {queryString, output} from '../utils';

function mockPage1() {
  return {
    id: Random.increment(),
  };
}

Mock.mock(/mock.queryList/, request => {
  console.log(request.url);
  const params = queryString(request.url);

  const {pageSize = 10} = params;

  const list = [];
  for (let i = 0; i < pageSize; i++) {
    list.push(mockPage1());
  }

  return output({
    list,
    total: Random.integer(50, 140),
  });
});