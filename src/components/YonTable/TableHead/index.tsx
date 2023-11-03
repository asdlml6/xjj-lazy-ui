import React from 'react';
import YonTableCell from '../YonTableCell/index';

interface TableHeadProps {
    column ?: Array<any>,
    headHeight ?: string
}

class TableHead extends React.Component<TableHeadProps> {
    constructor(props: TableHeadProps){
        super(props)
    }
    render (){
        const { column = [], headHeight } = this.props;
        return <thead>
            {
                column.map(item => {
                    return <YonTableCell type='th' headHeight={headHeight}>{item.name}</YonTableCell>
                })
            }
        </thead>
    }
}

export default TableHead;