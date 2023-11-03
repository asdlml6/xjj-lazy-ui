import React from 'react';
import './index.scss';


export default class YonTag extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render(){
        let { fontSize, text, background, color, className } = this.props;
        return <div
            className={`yon-tag-box ${className}`}
            style={{
                fontSize,
                background,
                color
            }}
        >
            {text || '已完工'}
        </div>
    }
}