## 如何使用
1、安装
```javascript
    npm install xjj-lazy-ui --save
```

2、引入
```javascript
    import React from 'react';
    import { Button } from 'xjj-lazy-ui';
    export default class App extends React.Component {
        constructor(props){
            super(props)
        }
        render (){
            return <Button></Button>
        }
    }
```

## commit 规范说明：
- feat：新功能
- fix：修补 BUG
- docs：修改文档，比如 README, CHANGELOG, CONTRIBUTE 等等
- style：不改变代码逻辑 (仅仅修改了空格、格式缩进、逗号等等)
- refactor：重构（既不修复错误也不添加功能）
- perf：优化相关，比如提升性能、体验
- test：增加测试，包括单元测试、集成测试等
- build：构建系统或外部依赖项的更改
- ci：自动化流程配置或脚本修改
- chore：非 src 和 test 的修改，发布版本等
- revert：恢复先前的提交

## npm script 关键命令说明
- start: 启动本地开发环境
- lint: eslint规范代码
- build:component: 打包组件库

## 如何测试组件？
1、在组件库的根目录下运行：` npm link  `;<br/>
2、在任意一个react项目（假设项目名叫A）的根目录下输入：` npm link megatron `;<br/>
3、像引入其他组件库一样引入组件；

## 贡献者
@春哥、@小旭