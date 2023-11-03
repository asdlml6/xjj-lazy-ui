import React from 'react';
import './index.scss';

export default class YonEmptyPage extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render(){
        const { description = '暂无数据', className = '' } = this.props;
        return <div className = {`yon-empty-page-box ${className}`}>
            <div className = 'yon-empty-image'></div>
            <div className = 'yon-empty-description'>{description}</div>
        </div>
    }
}