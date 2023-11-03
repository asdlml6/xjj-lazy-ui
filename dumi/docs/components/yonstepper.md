# YonStepper 步进器

## 何时使用
用作增加或者减少当前数值。

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 步进器的基本用法。
 */
import React from 'react';
import { YonStepper }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    stepperChange = (value) => {
        this.setState(state => {
            return {
                num: value
            }
        });
    }
    render (){
        return <div>
            <YonStepper num={this.state.num} min={0} onChange={this.stepperChange}/>
        </div>
    }
}
```

## Props说明

| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| num | 步进器绑定的值 | <div style='color: #c41d7f;font-size: 13px;'>number</div> | -- |
| min | 步进器的最小值 | <div style='color: #c41d7f;font-size: 13px;'>number</div> | -- |
| max | 步进器的最大值 | <div style='color: #c41d7f;font-size: 13px;'>number</div> | -- |
| step | 步长 | <div style='color: #c41d7f;font-size: 13px;'>number</div> | 1 |
| className | 设置步进器类名 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| style | 设置步进器样式 | <div style='color: #c41d7f;font-size: 13px;'>object</div> | --' |
| onChange | 步进器发生改变时的回调函数 | <div style='color: #c41d7f;font-size: 13px;'>function</div> | (val) => {} |
| stopClick | 步进器是否可点击 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | true |
