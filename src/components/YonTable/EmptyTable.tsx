import React from 'react';
import ColGroup from './ColGroup';
import { ColumnType } from './interface';
import './empty.scss';

interface EmptyTableProps {
    column ?: Array<ColumnType<any>>,
    emptyBody ?: () => React.ReactNode,
    bordered ?: boolean,
    headHeight ?: string
}

interface EmptyTableState {
    width ?: number | string
}

class EmptyTable extends React.Component<EmptyTableProps, EmptyTableState> {
    tableRef: React.RefObject<HTMLTableElement>;
    constructor(props:EmptyTableProps){
        super(props)
        this.state = {
            width: ''
        }
        this.tableRef = React.createRef();
    }
    componentDidMount(){
        // 计算空白body的width
        if (this.tableRef?.current){
            this.setState(state => {
                return {
                    width: this.tableRef.current?.getBoundingClientRect().width
                }
            })
        }
    }
    render (){
        const { column = [], emptyBody, bordered, headHeight } = this.props;
        const { width } = this.state;
        return <div className = {`megatron-empty-data-box ${bordered ? 'megatron-table-border' : ''}`}>
            <table ref={this.tableRef}>
                <ColGroup column={column} />
                <thead>
                    {
                        column.map(item => {
                            return <th style={{ height: headHeight || '30px' }}>{item.name}</th>
                        })
                    }
                </thead>
            </table>
            <div className = 'megatron-emty-table-body' style={{ width }}>
                {!emptyBody && <div className = 'image'></div>}
                {!emptyBody && <div>暂无数据</div>}
                { emptyBody && emptyBody() }
            </div>
        </div>
    }
}

export default EmptyTable;