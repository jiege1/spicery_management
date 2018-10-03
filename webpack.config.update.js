const IS_DEV = process.env.NODE_ENV !== 'production';
const rootSrc = __dirname + '/src';
module.exports = (config) => {

  if (IS_DEV) {
    // mock数据必须加的
    config.entry = {
      mock: rootSrc + '/mock/index.js',
      ...config.entry
    };
  }

  config = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        components: rootSrc + '/components',
        common: rootSrc + '/common',
        pages: rootSrc + '/pages',
        store: rootSrc + '/store',
        // api: rootSrc + '/api',
        // mock: rootSrc + '/mock',
      }
    },

  };

  return config;
};