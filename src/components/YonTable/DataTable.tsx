import React from 'react';
import ColGroup from './ColGroup';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { ColumnType } from './interface';
import './empty.scss';

interface DataTableProps {
    column ?: Array<ColumnType<any>>,
    data ?: Array<any>,
    bordered ?: boolean,
    width ?: string,
    rowHeight ?: string,
    headHeight ?: string,
    footer ?: () => React.ReactNode
}

interface DataTableState {
    fixedLeftColumnArr ?: Array<ColumnType<any>>,
    fixedRightColumnArr ?: Array<ColumnType<any>>,
    freedomColumnArr ?: Array<ColumnType<any>>,
    width ?: string | number
}

class DataTable extends React.Component<DataTableProps, DataTableState> {
    tableRef: React.RefObject<HTMLDivElement>;
    constructor(props:DataTableProps){
        super(props)
        this.state = {
            fixedLeftColumnArr: [],
            fixedRightColumnArr: [],
            freedomColumnArr: [],
        }
        this.tableRef = React.createRef();
    }
    componentDidMount(){
        // get固定左右列的数组, 并且计算table组件的宽度
        const { column = [] } = this.props;
        this.setState((state) => {
            return {
                fixedLeftColumnArr: column.filter(item => item.isFixedLeft),
                fixedRightColumnArr: column.filter(item => item.isFixedRight),
                freedomColumnArr: column.filter(item => !item.isFixedRight && !item.isFixedLeft),
            }
        })
    }
    render (){
        const { bordered, data = [], width = '1000px', rowHeight, headHeight, footer } = this.props;
        const { fixedLeftColumnArr = [], fixedRightColumnArr = [], freedomColumnArr = [] } = this.state;
        console.log('footer是啥:', footer);
        return <div className = {`megatron-data-box ${bordered ? 'megatron-table-border' : ''}`}>
            <div className = 'top'>
                {
                    fixedLeftColumnArr.length > 0 && <div className = 'left'>
                        <table>
                            <ColGroup column={ fixedLeftColumnArr } />
                            <TableHead column={ fixedLeftColumnArr } headHeight={headHeight}/>
                        </table>
                    </div>
                }
                <div className = 'freedom-column-head'>
                    <table>
                        <ColGroup column={ freedomColumnArr } />
                        <TableHead column={ freedomColumnArr } headHeight={headHeight}/>
                    </table>
                </div>
                {
                    fixedRightColumnArr.length > 0 && <div className = 'right'>
                        <table>
                            <ColGroup column={ fixedRightColumnArr } />
                            <TableHead column={ fixedRightColumnArr } headHeight={headHeight}/>
                        </table>
                    </div>
                }
            </div>
            <div className = 'bottom'>
                {
                    fixedLeftColumnArr.length > 0 && <div className = 'left'>
                        <table>
                            <ColGroup column={ fixedLeftColumnArr } />
                            <TableBody column={ fixedLeftColumnArr } data = {data} rowHeight={rowHeight}/>
                        </table>
                    </div>
                }
                <div className = 'freedom-column-head'>
                    <table style={{ width: width }}>
                        <ColGroup column={ freedomColumnArr } />
                        <TableBody column={ freedomColumnArr } data = {data} rowHeight={rowHeight}/>
                    </table>
                </div>
                {
                    fixedRightColumnArr.length > 0 && <div className = 'right'>
                        <table>
                            <ColGroup column={ fixedRightColumnArr } />
                            <TableBody column={ fixedRightColumnArr } data = {data} rowHeight={rowHeight}/>
                        </table>
                    </div>
                }
            </div>
            {
                footer && <div className = 'megatron-footer' style={{ width }}>
                    {
                        footer()
                    }
                </div>
            }
        </div>
    }
}

export default DataTable;