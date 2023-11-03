# YonTable 表格
展示行列数据。

## 如何使用
指定表格的数据源 data 为一个数组。

```jsx | pure

    const column = [
        {
            name: '歌曲', key: 'name', width: '200px'
        },
        {
            name: '歌手', key: 'people', width: '200px'
        },
        {
            name: '歌词', key: 'word', width: '300px'
        },
    ];

    const data = [
        {
            name: '还是分开', people: '张叶蕾', word: '你掐灭没吸的烟',
        },
        {
            name: '成全', people: '林宥嘉', word: '看见你和她走到我面前',
        },
        {
            name: '反方向的钟', people: '周杰伦', word: '穿梭时间旳画面的钟',
        }
    ];

    <YonTable data={data} column={column} width='700px'>
```
<Alert type="info">
  1、给YonTable组件指定 `width` 属性(width就是所有列宽之和，需要用户自己计算)是必要的，这会保证你的thead与tbody等宽，不会出现2px的问题 <br>
  2、YonTable组件默认固定表头
</Alert>

## 代码演示


### 没有数据

```jsx
/**
 * title: 没有数据时的渲染。
 * desc: 没有数据时，默认展示如下。
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { name: '第一列', key: 'col1', width: '200px' },
                { name: '第二列', key: 'col2', width: '200px' },
                { name: '第三列', key: 'col3', width: '200px' },
                { name: '第四列', key: 'col4', width: '200px' },
                { name: '第五列', key: 'col5', width: '200px' }
            ]
        }
    }
    render (){
        return <div className = 'xx-1'>
            <YonTable column = { this.state.column } bordered = {true} />
        </div>
    }
}
```


### 自定义空白表体

```jsx
/**
 * title: 没有数据时的渲染。
 * desc: 没有数据时，用户可通过`emptyBody`属性来自定义表体的显示。
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { name: '第一列', key: 'col1', width: '200px' },
                { name: '第二列', key: 'col2', width: '200px' },
                { name: '第三列', key: 'col3', width: '200px' },
                { name: '第四列', key: 'col4', width: '200px' },
                { name: '第五列', key: 'col5', width: '200px' }
            ]
        }
    }
    render (){
        return <div className = 'xx-1'>
            <YonTable column = { this.state.column } bordered = {true} emptyBody = { () => <div>111</div> }/>
        </div>
    }
}
```

### 基本用法

```jsx
/**
 * title: 基本用法。
 * desc: column属性指定表格列，data属性指定表格数据
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { name: '第一列', key: 'col1', width: '200px' },
                { name: '第二列', key: 'col2', width: '200px' },
                { name: '第三列', key: 'col3', width: '200px' },
                { name: '第四列', key: 'col4', width: '200px' },
                { name: '第五列', key: 'col5', width: '200px' }
            ],
            data: [
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5'},
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5'},
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5'}
            ]
        }
    }
    render (){
        return <div className = 'xx-1' style={{ width: '100%' }}>
            <YonTable column = { this.state.column } bordered = {true} data = { this.state.data } width = '1000px' />
        </div>
    }
}
```


### 自定义渲染函数

```jsx
/**
 * title: 自定义渲染函数。
 * desc: 通过column对象里的render函数，用户可以自由渲染表格内容。render函数的参数分别为：value（当前单元格的值）、currentRowData（当前行数据）、currentColumn（当前列信息）
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { 
                    name: '第一列', key: 'col1', width: '200px',
                    render: (value, currentRowData, currentColumn) => {
                        return <div>xxxxxxxxxx</div>
                    }
                },
                { 
                    name: '第二列', key: 'col2', width: '200px',
                    render: (value, currentRowData, currentColumn) => {
                        if (value === '1-2'){
                            return <div style={{ padding: '10px 20px', background: '#EAF8F4', color: '#18B681' }}>已开立</div>
                        } else if (value === '2-2') {
                            return <div style={{ padding: '10px 20px', background: '#FFF5EA', color: '#FFA600' }}>已接收</div>
                        } else {
                            return <div style={{ padding: '10px 20px', background: '#FFEDEE', color: '#FF5735' }}>已开工</div>
                        }
                    }
                },
                { name: '第三列', key: 'col3', width: '200px' },
                { name: '第四列', key: 'col4', width: '200px' },
                { name: '第五列', key: 'col5', width: '200px' }
            ],
            data: [
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5'},
                { col1: '1-1', col2: '2-2', col3: '1-3', col4: '1-4', col5: '1-5'},
                { col1: '1-1', col2: '3-2', col3: '1-3', col4: '1-4', col5: '1-5'}
            ]
        }
    }
    render (){
        return <div className = 'xx-1' style={{ width: '100%' }}>
            <YonTable column = { this.state.column } bordered = {true} data = { this.state.data } width = '1000px' rowHeight='60px' headHeight='60px' />
        </div>
    }
}
```



### 固定列

```jsx
/**
 * title: 固定列。
 * desc:  对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据。
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { name: '第一列', key: 'col1', width: '200px', isFixedLeft: true },
                { name: '第二列', key: 'col2', width: '200px' },
                { name: '第三列', key: 'col3', width: '200px' },
                { name: '第四列', key: 'col4', width: '200px' },
                { name: '第五列', key: 'col5', width: '200px' },
                { name: '第六列', key: 'col6', width: '200px' },
                { name: '第七列', key: 'col7', width: '200px' },
                { name: '第八列', key: 'col8', width: '200px' },
                { name: '第九列', key: 'col9', width: '200px', isFixedRight: true }
            ],
            data: [
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5', col6: '1-6', col7: '1-7', col8: '1-8', col9: '1-9' },
                { col1: '2-1', col2: '2-2', col3: '2-3', col4: '2-4', col5: '2-5', col6: '2-6', col7: '2-7', col8: '2-8', col9: '2-9' },
                { col1: '3-1', col2: '3-2', col3: '3-3', col4: '3-4', col5: '3-5', col6: '3-6', col7: '3-7', col8: '3-8', col9: '3-9' },
                { col1: '4-1', col2: '4-2', col3: '4-3', col4: '4-4', col5: '4-5', col6: '4-6', col7: '4-7', col8: '4-8', col9: '4-9' },
                { col1: '5-1', col2: '5-2', col3: '5-3', col4: '5-4', col5: '5-5', col6: '5-6', col7: '5-7', col8: '5-8', col9: '5-9' }
            ]
        }
    }
    render (){
        return <div className = 'xx-1'>
            <YonTable column = { this.state.column } bordered = {true} data = { this.state.data } />
        </div>
    }
}
```

### 合并单元格

```jsx
/**
 * title: 合并单元格。
 * desc:  表格支持行/列合并，使用 onCell属性，该属性是一个函数，必须显示的返回一个包含colSpan、rowSpan的对象。 当对象里的 colSpan 或者 rowSpan 设值为 -1 时，设置的单元格不会渲染。
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { name: '第一列', key: 'col1', width: '200px' },
                { 
                    name: '第二列', key: 'col2', width: '200px', 
                    onCell: (dataItem, colItem, dataIndex, colIndex) => {
                        if (dataIndex == 0){
                            return {
                                rowSpan: '2'
                            }
                        } else if (dataIndex == 1) {
                            return {
                                rowSpan: '-1'
                            }
                        } else {
                            return {
                                rowSpan: '1'
                            }
                        }
                    },
                    render: (value, currentRowData, currentColumn) => {
                        if (value == '1-2'){
                            return <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', borderLeft: '1px solid #DCDCDC', borderRight: '1px solid #DCDCDC' }}>{value}</div>
                        } else {
                            return null;
                        }
                    }
                },
                { 
                    name: '第三列', key: 'col3', width: '200px', 
                    onCell: (dataItem, colItem, dataIndex, colIndex) => {
                        if (dataIndex < 4){
                            return {
                                rowSpan: '1'
                            }
                        } else if(dataIndex === 4 && colIndex <= 2) {
                            return {
                                rowSpan: '1',
                                colSpan: '3',
                            }
                        }
                    }
                },
                { 
                    name: '第四列', key: 'col4', width: '200px',
                    onCell: (dataItem, colItem, dataIndex, colIndex) => {
                        if (dataIndex < 4){
                            return {
                                rowSpan: '1'
                            }
                        } else if(dataIndex === 4) {
                            return {
                                rowSpan: '1',
                                colSpan: '-1',
                            }
                        }
                    }
                },
                { 
                    name: '第五列', key: 'col5', width: '200px',
                    onCell: (dataItem, colItem, dataIndex, colIndex) => {
                        if (dataIndex < 4){
                            return {
                                rowSpan: '1'
                            }
                        } else if(dataIndex === 4) {
                            return {
                                rowSpan: '1',
                                colSpan: '-1',
                            }
                        }
                    }
                },
            ],
            data: [
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5' },
                { col1: '2-1', col2: '2-2', col3: '2-3', col4: '2-4', col5: '2-5' },
                { col1: '3-1', col2: '3-2', col3: '3-3', col4: '3-4', col5: '3-5' },
                { col1: '4-1', col2: '4-2', col3: '4-3', col4: '4-4', col5: '4-5' },
                { col1: '5-1', col2: '5-2', col3: '5-3', col4: '5-4', col5: '5-5' }
            ]
        }
    }
    render (){
        return <div className = 'xx-1'>
            <YonTable column = { this.state.column } bordered = {true} data = { this.state.data } rowHeight='60px' headHeight='60px' />
        </div>
    }
}
```


### 自定义总结栏

```jsx
/**
 * title: 自定义总结栏。
 * desc:  表格支持行/列合并，使用 onCell属性，该属性是一个函数，必须显示的返回一个包含colSpan、rowSpan的对象。 当对象里的 colSpan 或者 rowSpan 设值为 -1 时，设置的单元格不会渲染。
 */
import React from 'react';
import { YonTable } from 'xjj-lazy-ui';

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            column: [
                { name: '第一列', key: 'col1', width: '200px' },
                { 
                    name: '第二列', key: 'col2', width: '200px',
                },
                { 
                    name: '第三列', key: 'col3', width: '200px',
                },
                { 
                    name: '第四列', key: 'col4', width: '200px',
                },
                { 
                    name: '第五列', key: 'col5', width: '200px',
                },
            ],
            data: [
                { col1: '1-1', col2: '1-2', col3: '1-3', col4: '1-4', col5: '1-5' },
                { col1: '2-1', col2: '2-2', col3: '2-3', col4: '2-4', col5: '2-5' },
                { col1: '3-1', col2: '3-2', col3: '3-3', col4: '3-4', col5: '3-5' },
            ]
        }
    }
    render (){
        return <div className = 'xx-1'>
            <YonTable 
                column = { this.state.column }
                bordered = {true}
                data = { this.state.data }
                rowHeight='60px'
                headHeight='60px'
                footer={() => <div style={{ height: '200px' }}>111</div>}
            />
        </div>
    }
}
```


## API

### YonTable
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| bordered | 是否显示表格的外边框 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| column | 表格列的配置描述，具体项见下表 | <div style='color: #c41d7f;font-size: 13px;'>ColumnType[]</div> | -- |
| emptyBody | 自定义空白表体元素 | <div style='color: #c41d7f;font-size: 13px;'>() => React.ReactNode</div> | -- |
| width | 表格整体的宽度 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| rowHeight | 表格组件的行高 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 30px |
| headHeight | 表格组件的标题高度 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | 30px |
| footer | 总结栏 | <div style='color: #c41d7f;font-size: 13px;'>(currentData) => ReactNode</div> | -- |


### ColumnType
| <div style='width: 100%;text-align: left'>属性</div> | <div style='width: 100%;text-align: left'>说明</div> | <div style='width: 100%;text-align: left'>类型</div> | <div style='width: 100%;text-align: left'>默认值</div> |
| -- | -- | -- | -- |
| name | 列名称 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| key | 列数据在数据项中的名称 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| width | 列宽 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| align | 设置列的对齐方式 | <div style='color: #c41d7f;font-size: 13px;'> `left` &#124; &emsp; `right` &emsp; &#124; `center` </div> | center |
| className | 自定义列样式名称 | <div style='color: #c41d7f;font-size: 13px;'>string</div> | -- |
| isFixedLeft | 指定列是否为左侧固定 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| isFixedRight | 指定列是否为右侧固定 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| isMust | 指定列是否为必须列，指定时，该列数据不可为空 | <div style='color: #c41d7f;font-size: 13px;'>boolean</div> | false |
| render | 生成复杂数据的渲染函数，参数分别为当前单元格的值、当前行数据、当前列对象 | <div style='color: #c41d7f;font-size: 13px;'>function(value, currentRowData, currentColumn) {}</div> | -- |
| onCell | 设置单元格属性。参数分别为当前数据对象，当前列对象，当前数据索引，当前列索引 | <div style='color: #c41d7f;font-size: 13px;'>function(dataItem, colItem, dataIndex, colIndex) {}</div> | -- |




