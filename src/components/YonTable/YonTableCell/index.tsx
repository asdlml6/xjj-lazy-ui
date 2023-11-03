import React from 'react';

interface YonTableCellProps {
    type: 'td' | 'th',
    children: React.ReactNode,
    onCell ?: (dataItem ?: any, colItem ?: any, dataIndex ?: number, colIndex ?: number) => any | undefined,
    dataItem ?: object,
    dataIndex ?: number,
    colItem ?: object,
    colIndex ?: number,
    rowHeight ?: string,
    headHeight ?: string
}

interface cellProps {
    rowSpan ?: string,
    colSpan ?: string
}

class YonTableCell extends React.Component<YonTableCellProps> {
    constructor(props: YonTableCellProps){
        super(props);
    }
    render (){
        const { type, onCell, dataItem, dataIndex, colItem, colIndex, children, rowHeight, headHeight } = this.props;
        let obj : cellProps = {};
        if (!onCell){
            obj = {
                rowSpan: '1',
                colSpan: '1'
            }
        }
        if (typeof onCell == 'function'){
            obj = onCell(dataItem, colItem, dataIndex, colIndex);
        }
        if (type == 'td'){
            return <td 
                rowSpan={Number(obj.rowSpan)}
                colSpan={Number(obj.colSpan)} 
                style={{ 
                    display: (obj.rowSpan == '-1' || obj.colSpan == '-1') ? 'none' : 'table-cell',
                    height: rowHeight || '30px'
                }}
            >
                {
                    children
                }
            </td>
        }
        if (type == 'th'){
            return <th
                style={{ height: headHeight || '30px' }}
            >
                { children }
            </th>
        }
    }
}

export default YonTableCell;