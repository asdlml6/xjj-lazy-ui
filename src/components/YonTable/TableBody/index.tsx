import React from 'react';
import YonTableCell from '../YonTableCell/index'

interface TableBodyProps {
    column ?: Array<any>,
    data ?: Array<any>,
    rowHeight ?: string
}

interface TableBodyState {
}

class TableBody extends React.Component<TableBodyProps, TableBodyState> {
    constructor(props:TableBodyProps){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
    }
    render (){
        const { data = [], column = [], rowHeight } = this.props;
        return <tbody>
            {
                data.map( (dataItem, dataIndex) => {
                    return <tr>
                        {
                            column.map( (colItem, colIndex) => {
                                return <YonTableCell 
                                        type='td' 
                                        dataItem={dataItem} 
                                        dataIndex={dataIndex} 
                                        colItem={colItem} 
                                        colIndex={colIndex}
                                        onCell = { colItem.onCell }
                                        rowHeight={rowHeight}
                                    >
                                    <div className = 'megatron-table-cell' style={{ width: colItem.width }}>
                                        { !colItem.render && dataItem[colItem.key]}
                                        { colItem.render && colItem.render(dataItem[colItem.key], dataItem, colItem) && colItem.render(dataItem[colItem.key], dataItem, colItem) }
                                        { colItem.render && !colItem.render(dataItem[colItem.key], dataItem, colItem) && dataItem[colItem.key] }
                                    </div>
                                </YonTableCell>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    }
}

export default TableBody;