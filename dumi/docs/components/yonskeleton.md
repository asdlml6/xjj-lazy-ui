# YonSkeleton 骨架屏
一个内容占位组件

## 何时使用
加载框出现的地方按理来说都可以使用它来代替

## 基本用法
```jsx
/**
 * title: 基本
 * desc: 基本用法。
 */
import React from 'react';
import { YonSkeleton }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div>
            <YonSkeleton>
                <YonSkeleton.Title></YonSkeleton.Title>
                <YonSkeleton.Paragraph></YonSkeleton.Paragraph>
            </YonSkeleton>
        </div>
    }
}
```

## 开启动画
```jsx
/**
 * title: 开启动画
 * desc: Title组件与Paragraph组件都有一个animated属性，该属性值为true则代表开启动画。
 */
import React from 'react';
import { YonSkeleton }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div>
            <YonSkeleton>
                <YonSkeleton.Title animated={true}></YonSkeleton.Title>
                <YonSkeleton.Paragraph animated={true}></YonSkeleton.Paragraph>
            </YonSkeleton>
        </div>
    }
}
```

## 自定义行数
```jsx
/**
 * title: 自定义行数
 * desc: Paragraph组件有一个lines属性，该属性值的类型为number，用于控制渲染的行数。
 */
import React from 'react';
import { YonSkeleton }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div>
            <YonSkeleton>
                <YonSkeleton.Title animated={true}></YonSkeleton.Title>
                <YonSkeleton.Paragraph lines={3}></YonSkeleton.Paragraph>
            </YonSkeleton>
        </div>
    }
}
```

## Props说明

### YonSkeleton.Title
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| animated | 是否开启动画 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| width | 设置标题的宽度 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 500px |
| height | 设置标题的高度 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 32px |

### YonSkeleton.Paragraph
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| lines | 段落数量 | <div style='color: #c41d7f;font-size: 13px;'>number</div> | 1 |
| width | 设置段落的宽度 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 500px |
| height | 设置段落的高度 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 16px |
