# YonWaterFall 水印
给页面的某个区域加上水印。

## 代码演示
```jsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React from 'react';
import { YonWaterFall }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div style={{ height: '200px' }}>
            <YonWaterFall
                outerCircleBackground={'#BAE9D9'}
                innerCircleBackground={'#BAE9D9'}
                text={'已完善'}
                color={'#18B681'}
            />
        </div>
    }
}
```


## API
按钮的属性说明如下：
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| text | 设置水印的内容 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| width | 设置水印的宽度| <div style='color: #c41d7f;font-size: 13px;'>string</div> | 100px |
| color | 设置水印内容的颜色 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| outerCircleBackground | 设置外层轮廓的颜色 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| innerCircleBackground | 设置内层轮廓的颜色 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |