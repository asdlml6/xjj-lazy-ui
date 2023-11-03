# YonButton 按钮
按钮用于开始一个即时操作。

## 何时使用
响应用户点击行为，触发相应的业务逻辑。

## 代码演示

```jsx
/**
 * title: 按钮类型
 * desc: 按钮有2种类型：主按钮、默认按钮。
 */
import React from 'react';
import { YonButton }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div style={{ display: 'flex', gap: '10px' }}>
            <YonButton type='main' text={'主按钮'}/>
            <YonButton text={'默认按钮'}/>
        </div>
    }
}
```

## 不可用状态
```jsx
/**
 * title: 不可用状态
 * desc: 添加 disabled 属性即可让按钮处于不可用状态(即点击事件不被触发)，同时按钮样式也会改变。
 */
import React from 'react';
import { YonButton }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div style={{ display: 'flex', gap: '10px' }}>
            <YonButton type='main' text={'主按钮'} disabled = {true}/>
        </div>
    }
}
```

## 点击事件
```jsx
/**
 * title: 点击事件
 * desc: 用户可通过onClick属性定制相应的点击事件
 */
import React from 'react';
import { YonButton }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    onOpen = (obj) => {
        console.log('obj:', obj);
    }
    render (){
        return <div style={{ display: 'flex', gap: '10px' }}>
            <YonButton type='main' text={'主按钮'} onClick={ () => this.onOpen(123) }/>
        </div>
    }
}
```

## API
按钮的属性说明如下：
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| text | 设置按钮名字 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 按钮 |
| type | 设置按钮类型； main、default | <div style='color: #c41d7f;font-size: 13px;'>string</div> | default |
| disabled | 按钮禁用状态 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| style | 设置按钮的样式 | <div style='color: #c41d7f;font-size: 13px;'>React.CSSProperties</div> | -- |
| className | 设置按钮类名 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| onClick | 点击按钮时的回调 | <div style='color: #c41d7f;font-size: 13px;'>(event) => void</div> | -- |