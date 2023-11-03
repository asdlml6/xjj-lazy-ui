import React from 'react';
import './index.scss';


export default class YonWaterFall extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }
    render(){
        let { text, outerCircleBackground, innerCircleBackground, width, color } = this.props;
        return <div className = 'yon-waterfall-box'
            style={{
                border: `1px solid ${outerCircleBackground}`,
                width,
                height: width
            }}
        >
            <div 
                className = 'waterfall-content-box' 
                style={{ border: `1px solid ${innerCircleBackground}` }}
            >
                <div className = 'content' style={{ color }}>{text || '这是一个水印'}</div>
            </div>
        </div>
    }
}