// 骨架屏组件
import React from 'react';
import './index.scss';

class Title extends React.Component<any> {
    constructor(props:any){
        super(props);
    }
    render(){
        let { animated } = this.props;
        return <div className = {`yon-skeleton-title-box ${animated ? 'yon-skeleton-title-box-animated' : ''}`}></div>
    }
}

class Paragraph extends React.Component<any> {
    constructor(props:any){
        super(props);
    }
    render(){
        let { lines = 1, animated } = this.props;
        return <div className = 'yon-skeleton-paragraph-box'>
            {
                new Array(lines).fill(1).map(item => {
                    return <div className={`yon-skeleton-paragraph ${animated ? 'yon-skeleton-title-box-animated' : ''}`}></div>
                })
            }
        </div>
    }
}

class YonSkeleton extends React.Component<any> {

    static Title: typeof Title;
    static Paragraph: typeof Paragraph;

    constructor(props: any){
        super(props);
    }
    render (){
        let { children } = this.props;
        return <div className = 'yon-skeleton-box'>
            {
                children
            }
        </div>
    }
}

YonSkeleton.Title = Title;
YonSkeleton.Paragraph = Paragraph;


export default YonSkeleton;