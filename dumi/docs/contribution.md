# 贡献指南

## 一、组件库搭建流程
<Alert type="info">
  这个只是记录个人搭建组件库的流程以及遇到的问题， 仅供参考。
</Alert>

### 1.1、组件展示文档选型
通过调研发现，支持 `React` 的 `组件文档展示` 工具大约有如下几个
* [StoryBook](https://storybook.js.org/)
* [docz](https://www.docz.site/)
* [dumi](https://d.umijs.org/zh-CN)

其中`dumi`的受欢迎程度是最高的，同时也是上手难度最低的，所以毋庸置疑的选择了dumi。

### 1.2、项目搭建思路
因为dumi只是文档展示工具，并不支持直接打出Library，所以需要 `自己搭建项目 + 内嵌dumi` 的方式完成组件库的开发。开发前有3点需要确认：
* 如何打出Library？
> webpack中 output选项 里的 `libraryTarget` 字段控制着打包产出的形态，这里我们直接选择“umd”即可。umd全称：Universal Module Definition（宇宙模块标准）, 使模块能够运行在各种环境下，无论是CommonJs（requre）、AMD（MDF）、ES6 Module（import）。
* 如何指定Library的入口？
> package.json文件里的 `main`、`module`、`browser` 字段都可以指定Library的入口文件，具体他们3个的关系请自行度娘，这里我们只使用 main 字段就行（值是项目的入口文件）
* 如何将dumi内嵌进来？

## 二、组件理念
致力于设计出一款符合业务的 移动端、PC端 通用的组件。