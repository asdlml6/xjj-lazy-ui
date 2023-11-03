# YonDrawer 抽屉
屏幕边缘滑出的浮层面板。

## 何时使用
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。


## 基础抽屉

```jsx
/**
 * title: 基础抽屉
 * desc: 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
 */
import React from 'react';
import { YonDrawer } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            position: 'left'
        }
    }

    // 关闭弹窗
    onClose = () => {
        this.setState({ visible: false });
    }

    // 打开弹窗
    onOpen = () => {
        this.setState({ visible: true });
    }

    // 选中位置
    clickPosition = (position) => {
        this.setState(state => {
            return {
                visible: false,
                position
            }
        });
    }

    render (){
        return <div>
            <button onClick={ this.onOpen }>open</button>
            <YonDrawer visible={this.state.visible} onClose={this.onClose}>
                <div>this is a content ...</div>
                <div>this is a content ...</div>
                <div>this is a content ...</div>
            </YonDrawer>
        </div>
    }
}
```

## 自定义位置

```jsx
/**
 * title: 自定义位置
 * desc: 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。
 */
import React from 'react';
import { YonDrawer } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            position: 'left'
        }
    }

    // 关闭弹窗
    onClose = () => {
        this.setState({ visible: false });
    }

    // 打开弹窗
    onOpen = () => {
        this.setState({ visible: true });
    }

    // 选中位置
    clickPosition = (position) => {
        this.setState(state => {
            return {
                visible: false,
                position
            }
        });
    }

    render (){
        return <div>
            <button onClick={ this.onOpen }>open</button>
            <span onClick={ () => this.clickPosition('top') } style={{ marginLeft: '16px' }}>
                <input type="radio" value="top" checked={ 'top' === this.state.position }/>
                <span>top</span>
            </span>
            <span style={{ marginLeft: '16px', marginRight: '16px' }} onClick={ () => this.clickPosition('right') }>
                <input type="radio" value="right" checked={ 'right' === this.state.position }/>
                <span>right</span>
            </span>
            <span onClick={ () => this.clickPosition('bottom') }>
                <input type="radio" value="bottom" checked={ 'bottom' === this.state.position } />
                <span>bottom</span>
            </span>
            <span style={{ marginLeft: '16px' }} onClick={ () => this.clickPosition('left') }>
                <input type="radio" value="left" checked={ 'left' === this.state.position }/>
                <span>left</span>
            </span>
            <YonDrawer visible={this.state.visible} position={this.state.position} onClose={this.onClose}>
                <div>this is a content ...</div>
                <div>this is a content ...</div>
                <div>this is a content ...</div>
            </YonDrawer>
        </div>
    }
}
```

## 渲染到当前位置
```jsx
/**
 * title: 渲染指定位置
 * desc: 渲染在指定 dom 里。自定义容器。
 */
import React from 'react';
import { YonDrawer } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visibleWidth: false,
            position: 'right',
        }
    }

    // 关闭弹窗
    onClose = () => {
        this.setState({ visibleWidth: false });
    }

    // 打开弹窗
    onOpen = () => {
        this.setState({ visibleWidth: true });
    }

    render (){
        return <div className = 'xx-drawer-box' style={{ width: '100%', height: '300px', background: '#fafafa', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border:'1px solid #ebedf0', position: 'relative', overflow: 'hidden' }}>
            
            <div>渲染到当前颜色框内</div>
            
            <button onClick={ this.onOpen } style={{ marginRight: '16px' }}>open</button>

            <YonDrawer visible={this.state.visibleWidth} position={this.state.position} onClose={this.onClose} renderToCurrentFather = {true}>
                <div>this is a 自定义宽度 ...</div>
                <div>this is a 自定义宽度 ...</div>
                <div>this is a 自定义宽度 ...</div>
            </YonDrawer>

        </div>
    }
}
```


## 自定义抽屉的宽度与高度

```jsx
/**
 * title: 自定义宽度与高度
 * desc: width仅在 position === 'left' || 'right'时生效。height仅在 position === 'top' || 'bottom'时生效。
 */
import React from 'react';
import { YonDrawer } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visibleWidth: false,
            visibleHeight: false,
            positionWidth: 'right',
            positionHeight: 'bottom'
        }
    }

    // 关闭弹窗
    onCloseWidth = () => {
        this.setState({ visibleWidth: false });
    }

    // 打开弹窗
    onOpenWidth = () => {
        this.setState({ visibleWidth: true });
    }

    onOpenHeight = () => {
        this.setState({ visibleHeight: true });
    }

    onCloseHeight = () => {
        this.setState({ visibleHeight: false });
    }

    render (){
        return <div>
            <button onClick={ this.onOpenWidth } style={{ marginRight: '16px' }}>open-width</button>
            <button onClick={ this.onOpenHeight }>open-height</button>

            <YonDrawer visible={this.state.visibleWidth} position={this.state.positionWidth} onClose={this.onCloseWidth} width='50%'>
                <div>this is a 自定义宽度 ...</div>
                <div>this is a 自定义宽度 ...</div>
                <div>this is a 自定义宽度 ...</div>
            </YonDrawer>

            <YonDrawer visible={this.state.visibleHeight} position={this.state.positionHeight} onClose={this.onCloseHeight} height='50%'>
                <div>this is a 自定义高度 ...</div>
                <div>this is a 自定义高度 ...</div>
                <div>this is a 自定义高度 ...</div>
            </YonDrawer>

        </div>
    }
}
```

## API

步骤条内的每一个步骤。

| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| visible | Drawer 是否可见 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| position | 抽屉的方向 | <div style='color: #c41d7f;font-size: 13px;'> `top` &emsp; &#124; &emsp; `right` &emsp; &#124; &emsp; `bottom` &emsp; &#124; &emsp; `left`</div> | `right` |
| renderToCurrentFather | 指定 Drawer 挂载的节点，并在容器内展现，true 为挂载在当前位置，false为挂载在body标签下 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| onClose | 点击遮罩层的回调 | <div style='color: #c41d7f;font-size: 13px;'>function(e)</div> | -- |
| width | 宽度，在 position 为 top 或 bottom 时使用 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | `375px` |
| height | 高度， 在 position 为 top 或 bottom 时使用 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | `375px` |

