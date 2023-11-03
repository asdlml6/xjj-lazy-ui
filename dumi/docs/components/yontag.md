# YonTag 标签


## 何时使用
标签用于展示事物的属性与分类。

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 标签的基本用法。
 */
import React from 'react';
import { YonTag }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div style={{ display: 'flex', gap: '10px' }}>
            <YonTag/>
            <YonTag text='已开工' background='#558AEC'/>
            <YonTag text='已接收' background='#FFA700'/>
            <YonTag text='已下发' background='#9CA5B9'/>
            <YonTag text='不合格' background='#FFEEEA' color='#FF5735'/>
            <YonTag text='合格' background='#EAF8F4' color='#18B681'/>
            <YonTag text='待定' background='#FFF5EA' color='#FFA600'/>
        </div>
    }
}
```

## Props说明
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| text | 设置标签名字 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | '已完工' |
| fontSize | 设置标签的字体大小 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| background | 设置标签的背景颜色 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | '#18B681' |
| className | 设置标签类名 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 'yon-tag-box' |