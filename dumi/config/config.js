const path = require('path');

export default {
    // base: '/xjj-lazy-ui/',
    // publicPath: '/xjj-lazy-ui/',
    publicPath: '/xjj-lazy-ui/dumi/dist/',
    chainWebpack(memo) {
      memo.plugins.delete('copy');
      memo.resolve.alias.set('xjj-lazy-ui', path.resolve(__dirname, '../../src/index.ts'));
      memo.resolve.alias.set('demo', path.resolve(__dirname, '../../src/demo/Home.js'));
    },
};