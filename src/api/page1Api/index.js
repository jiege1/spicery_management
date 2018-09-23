import Ajax from 'common/utils/ajax';
/**
 *
 * @page1Api {get} /queryList 获取购买服务记录列表
 * @apiName queryList
 * @apiGroup buyRecord
 *
 * @apiParam {Number} pageNum  当前页数.
 * @apiParam {Number} pageSize  单页条数.
 * @apiParam {String} name  购买服务记录ID.
 *
 * @apiSuccess {Number} total  查询到的总条数.
 * @apiSuccess {Object[]} list  购买服务记录列表.
 * @apiSuccess {Number} list.id  ID.
 * @apiSuccess {String} list.customerName  姓名.
 * @apiSuccess {String} list.productTitle  服务.
 * @apiSuccess {Number} list.productPrice  原价格.
 * @apiSuccess {Number} list.productNum  原次数.
 * @apiSuccess {Number} list.realPrice  实际价格.
 * @apiSuccess {Number} list.realNum  实际次数.
 * @apiSuccess {Number} list.usedNum  使用次数.
 * @apiSuccess {String} list.createdTime  购买时间.
 * @apiSuccess {String} list.nearUsedTime  最近使用时间.
 *
 * @apiSuccessExample 成功返回示例
 * {
 *  code: 0,
 *  msg: '',
 *  data: {
 *    total: 100,
 *    list: [
 *      id: 1,
 *      customerName: '张三',
 *      productTitle: '脑袋按摩',
 *      productPrice: 100,
 *      productNum: 5,
 *      realPrice: 120,
 *      realNum: 6,
 *      usedNum: 2,
 *      createdTime: '2018-07-14T03:12:09.000Z',
 *      nearUsedTime: '2018-07-15T03:12:09.000Z',
 *    ]
 * }
 *
 */
export const queryList = params => Ajax.query({url: 'page1.queryList', params});
