# YonEmptyPage 空页面
空状态时的展示占位图。

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 基础展示。
 */
import React from 'react';
import { YonEmptyPage }  from 'xjj-lazy-ui';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return <div style={{ height: '100%', width: '100%' }}>
            <YonEmptyPage/>
        </div>
    }
}
```