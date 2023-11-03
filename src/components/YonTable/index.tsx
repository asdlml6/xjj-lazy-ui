import React from 'react';
import EmptyTable from './EmptyTable';
import { ColumnType } from './interface';
import './index.scss';
import DataTable from './DataTable';

interface YonTableProps {
    data ?: Array<any>,
    column ?: Array<ColumnType<any>>,
    bordered ?: boolean,
    emptyBody ?: () => React.ReactNode,
    width ?: string,
    rowHeight ?: string,
    headHeight ?: string,
    footer ?: () => React.ReactNode
}

class YonTable extends React.Component<YonTableProps> {
    constructor(props: YonTableProps){
        super(props);
    }
    render (){
        const { data = [], column, bordered, emptyBody, width, rowHeight, headHeight, footer } = this.props;
        return <div className = {`megatron-table-box`}>
            {
                data.length == 0 && <EmptyTable column = { column } emptyBody = { emptyBody } bordered = { bordered } headHeight = { headHeight }/>
            }
            {
                data.length > 0 && <DataTable 
                    column = { column } 
                    bordered = { bordered } 
                    data = { data } 
                    width = { width } 
                    rowHeight={rowHeight} 
                    headHeight = { headHeight }
                    footer={footer}
                />
            }
        </div>
    }
}

export default YonTable;