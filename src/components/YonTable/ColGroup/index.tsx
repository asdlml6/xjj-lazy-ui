import React from 'react';

interface ColGroupProps {
    column ?: Array<any>
}

class ColGroup extends React.Component<ColGroupProps> {
    constructor(props:ColGroupProps){
        super(props)
    }
    render (){
        const { column = [] } = this.props;
        return <colgroup>
            {
                column.map(item => {
                    return <col style={{ minWidth: item.width, width: item.width, maxWidth: item.width }}></col>
                })
            }
        </colgroup>
    }
}

export default ColGroup;