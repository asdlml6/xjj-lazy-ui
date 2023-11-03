# YonSteps 步骤条
显示当前任务进度的导航条。

## 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，告知用户任务处于哪一步，或者即将要去哪。

## 基本用法
```jsx
/**
 * title: 基本用法
 * desc: 简单的步骤条。
 */
import React from 'react';
import { YonSteps } from 'xjj-lazy-ui';

const { YonStep } = YonSteps;

export default class Demo extends React.Component {
    render (){
        return <YonSteps>
            <YonStep title='已开工哈哈哈哈哈哈' description='张小明哈哈哈哈哈哈哈哈哈哈哈哈哈' width='200px'></YonStep>
            <YonStep title='已暂停' description='孙小权'></YonStep>
            <YonStep title='已完工' description='张小明'></YonStep>
            <YonStep title='未完工' description='白展堂'></YonStep>
            <YonStep title='未完工' description='佟湘玉' isFinal = { true }></YonStep>
        </YonSteps>
    }
}
```

## 步骤类型

```jsx
/**
 * title: 步骤类型
 * desc: 使用 YonStep 的 status 属性来指定当前步骤的状态。`finish`对应绿色，`process`对应蓝色，`error`对应红色，`wait`对应灰色
 */
import React from 'react';
import { YonSteps } from 'xjj-lazy-ui';

const { YonStep } = YonSteps;

export default class Demo extends React.Component {
    render (){
        return <YonSteps>
            <YonStep title='已开工' description='张小明' status='finish'></YonStep>
            <YonStep title='已暂停' description='孙小权' status='process'></YonStep>
            <YonStep title='未完工' description='白展堂' status='error'></YonStep>
            <YonStep title='未完工' description='佟湘玉' status='wait' isFinal = { true }></YonStep>
        </YonSteps>
    }
}
```

## 步骤切换
```jsx
/**
 * title: 步骤切换
 * desc: 通常配合status属性使用，达到步骤切换的效果。
 */
import React from 'react';
import { YonSteps } from 'xjj-lazy-ui';

const { YonStep } = YonSteps;

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            steps: [
                { title: '已开工', description: '张小明', status: 'process' },
                { title: '已暂停', description: '孙小权', status: 'wait' },
                { title: '已完工', description: '吕秀才', status: 'wait' },
                { title: '未完工', description: '白展堂', status: 'wait' },
                { title: '未完工', description: '佟湘玉', status: 'wait', isFinal: true },
            ]
        };
    }

    // 点击下一步
    clickNext = () => {
        if (this.state.steps[this.state.steps.length - 1].status === 'process'){
            return
        }
        // 得到当前任务在数组中的位置
        let processIndex = 0;
        for (let index = 0; index < this.state.steps.length; index++){
            if (this.state.steps[index].status === 'process'){
                processIndex = index;
                break;
            }
        }
        // 重新设置数组状态
        let newSteps = this.state.steps.map((item, index) => {
            if (index === processIndex + 1){
                item.status = 'process';
                return item;
            } else if (index < processIndex + 1) {
                item.status = 'finish';
                return item;
            } else {
                item.status = 'wait';
                return item;
            }
        });
        this.setState(state => {
            return {
                ...state,
                steps: [...newSteps]
            }
        })
    }

    // 点击上一步
    clickPrev = () => {
        const { steps } = this.state;
        if (steps[0].status === 'process'){
            return
        }
        // 得到当前任务在数组中的位置
        let processIndex = 0;
        for (let index = 0; index < steps.length; index++){
            if (steps[index].status === 'process'){
                processIndex = index;
                break;
            }
        }
        // 重新设置数组状态
        let newSteps = steps.map((item, index) => {
            if (index === processIndex - 1){
                item.status = 'process';
                return item;
            } else if (index < processIndex - 1) {
                item.status = 'finish';
                return item;
            } else {
                item.status = 'wait';
                return item;
            }
        });
        this.setState(state => {
            return {
                ...state,
                steps: [...newSteps]
            }
        })
    }

    render (){
        return <div>
            <div style={{  }}>
                <YonSteps>
                    {
                        this.state.steps.map(item => {
                            return <YonStep 
                                        title={item.title}
                                        description={item.description}
                                        status={item.status}
                                        isFinal={item.isFinal}
                                    />
                        })
                    }
                </YonSteps>
            </div>
            <div>
                <button onClick = { this.clickPrev } style={{ marginRight: '10px' }}>上一步</button>
                <button onClick = { this.clickNext }>下一步</button>
            </div>
        </div>
    }
}
```

## 垂直方向的步骤条

```jsx
/**
 * title: 垂直方向的步骤条
 * desc: 通过`direction`属性来控制步骤条的方向。
 */
import React from 'react';
import { YonSteps } from 'xjj-lazy-ui';

const { YonStep } = YonSteps;

export default class Demo extends React.Component {
    render (){
        return <YonSteps direction={'vertical'}>
            <YonStep title='已开工' description='This is a description.' width='200px'></YonStep>
            <YonStep title='已暂停' description='This is a description.' width='200px'></YonStep>
            <YonStep title='已完工' description='This is a description.' width='200px' status = 'process'></YonStep>
            <YonStep title='未完工' description='This is a description.' width='200px' status = 'wait'></YonStep>
            <YonStep title='未完工' description='This is a description.' width='200px' status = 'wait' isFinal = { true }></YonStep>
        </YonSteps>
    }
}
```

## 自定义线条颜色

```jsx
/**
 * title: 自定义线条颜色
 * desc: 通过`lineColor`属性来控制线的颜色。
 */
import React from 'react';
import { YonSteps } from 'xjj-lazy-ui';

const { YonStep } = YonSteps;

export default class Demo extends React.Component {
    render (){
        return <YonSteps direction={'vertical'}>
            <YonStep title='已开工' description='This is a description.' lineColor='#1890FF' width='200px'></YonStep>
            <YonStep title='已暂停' description='This is a description.' lineColor='#1890FF' width='200px'></YonStep>
            <YonStep title='已完工' description='This is a description.' status = 'process' width='200px'></YonStep>
            <YonStep title='未完工' description='This is a description.' status = 'wait' width='200px'></YonStep>
            <YonStep title='未完工' description='This is a description.' status = 'wait' width='200px' isFinal = { true }></YonStep>
        </YonSteps>
    }
}
```

## API

### YonSteps

整体步骤条。

| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| className | 步骤条类名 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| direction | 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | horizontal |


### YonStep

步骤条内的每一个步骤。

| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| title | 标题 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | '这是一个状态' |
| description | 步骤的详情描述 | <div style='color: #c41d7f;font-size: 13px;'>string &#124; React.ReactNode &#124; ( () => React.ReactNode )</div> | -- |
| isFinal | 是否是最后一步 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| status | 指定状态。可选：`wait` `process` `finish` `error` | <div style='color: #c41d7f;font-size: 13px;'>string</div> | `finish` |
| lineColor | 指定线的颜色。 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | `#DCDCDC` |
| width | 步骤的宽度。`width`越大，`title` 与 `description` 的宽度也越大 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | `100px` |

