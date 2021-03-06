define({ "api": [
  {
    "type": "get",
    "url": "/queryList",
    "title": "获取购买服务记录列表",
    "name": "queryList",
    "group": "buyRecord",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>当前页数.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>单页条数.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>购买服务记录ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>查询到的总条数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>购买服务记录列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.customerName",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.productTitle",
            "description": "<p>服务.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.productPrice",
            "description": "<p>原价格.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.productNum",
            "description": "<p>原次数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.realPrice",
            "description": "<p>实际价格.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.realNum",
            "description": "<p>实际次数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.usedNum",
            "description": "<p>使用次数.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.createdTime",
            "description": "<p>购买时间.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.nearUsedTime",
            "description": "<p>最近使用时间.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\n code: 0,\n msg: '',\n data: {\n   total: 100,\n   list: [\n     id: 1,\n     customerName: '张三',\n     productTitle: '脑袋按摩',\n     productPrice: 100,\n     productNum: 5,\n     realPrice: 120,\n     realNum: 6,\n     usedNum: 2,\n     createdTime: '2018-07-14T03:12:09.000Z',\n     nearUsedTime: '2018-07-15T03:12:09.000Z',\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/page1Api/page1Api/index.js",
    "groupTitle": "buyRecord"
  }
] });
