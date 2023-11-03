# 首页

`xjj-lazy-ui` 是基于 用友 设计体系的 React UI 组件库，主要用于研发企业级MES产品。

## 安装
我们推荐使用 npm 或 yarn 的方式进行开发。
```javascript
  npm install xjj-lazy-ui --save
```

```javascript
  yarn add megatron xjj-lazy-ui --save
```

## 示例
```javascript
  import { YonHelloWorld } from 'xjj-lazy-ui';

ReactDOM.render(<YonHelloWorld />, mountNode);
```

引入样式:
```javascript
  import 'xjj-lazy-ui/lib/style/index.css';
```

### 按需加载
<Alert type="info">
  <font color="#697b8c">注意：xjj-lazy-ui 默认不支持基于 ES module 的 tree shaking，在后续的版本升级中可能会支持ES module 的 tree shaking。</font>
</Alert>

下面的3种方式都可以**只加载用到的组件**。

- 使用 <font color="cornflowerblue"> babel-plugin-import </font>（推荐）。

  首先需要安装`babel-plugin-import`插件

  ```javascript
    npm install babel-plugin-import --save-dev
  ```
  然后

  ```javascript
  // 如果是CRA项目（也就是存在config-overrides.js文件），那么请添加如下配置
  const { override, fixBabelImports, useBabelRc  } = require('customize-cra');
  module.exports = override(
    useBabelRc(),
    fixBabelImports('import', {
      libraryName: 'xjj-lazy-ui',
      camel2DashComponentName: false,
      customStyleName: (name) => {
        return `xjj-lazy-ui/lib/style/${name}.css`
      },
      customName: (name) => {
        return `xjj-lazy-ui/lib/${name}`
      }
    })
  );
  ```

  最后只需从 xjj-lazy-ui 引入模块即可，无需单独引入样式。

  ```javascript
    // babel-plugin-import 会帮助你加载 JS 和 CSS
    import { YonHelloWorld } from 'xjj-lazy-ui';
  ```

- 使用 babel-plugin-component。

  首先需要安装`babel-plugin-component`插件

  ```javascript
    npm install babel-plugin-component --save-dev
  ```

  然后
  
  ```javascript
  // 如果是CRA项目（也就是存在config-overrides.js文件），那么请添加如下配置
  const { override, fixBabelImports, useBabelRc  } = require('customize-cra');
  fixBabelImports('component', {
    "libraryName": "xjj-lazy-ui",
    "libraryDirectory": "lib",
    "camel2DashComponentName": false,
    "camel2UnderlineComponentName": false,
    "camel2Dash": false,
    styleLibraryName: "style",
  })
  ```

  最后只需从 xjj-lazy-ui 引入模块即可，无需单独引入样式。

  ```javascript
    // babel-plugin-component 会帮助你加载 JS 和 CSS
    import { YonHelloWorld } from 'xjj-lazy-ui';
  ```

## 如何贡献
在任何形式的参与前，请先阅读 <font color="#1890FF">贡献者文档。</font>