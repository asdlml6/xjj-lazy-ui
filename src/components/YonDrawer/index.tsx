import React from 'react';
import './index.scss';

enum positionEnum {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left'
}

interface Props {
    children ?: React.ReactNode,
    visible ?: boolean,
    onClose ?: () => void,
    position ?: positionEnum,
    renderToCurrentFather ?: false,
    width ?: string,
    height ?: string,
    computeWidth ?: (x: string, y: string) => any,
    maskRef ?: any
}

interface State {
    visible ?: boolean
}

export default class Drawer extends React.Component<Props, State> {
    maskRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    static defaultProps: Props = {
        children: undefined,
        visible: false,
        position: positionEnum.right,
        renderToCurrentFather: false,
        width: '500px',
        height: '500px'
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false 
        }
        this.maskRef = React.createRef();
        this.contentRef = React.createRef();
    }
    
    // 计算宽度
    computeWidth = (direction: positionEnum | undefined, width: string | undefined) => {
        if (direction === 'left' || direction === 'right'){
            return width
        }
    }

    // 计算高度
    computeHeight = (direction: positionEnum | undefined, height: string | undefined) => {
        if (direction === 'top' || direction === 'bottom'){
            return height
        }
    }

    // 组件接收新的属性
    componentWillReceiveProps(nextProps: any){
        const { visible, position } = this.props;
        if (visible !== nextProps.visible && nextProps.visible){
            // 说明此时是打开drawer
            this.setState((state) => {
                return {
                    ...state,
                    visible: true
                }
            }, () => {
                setTimeout(() => {
                    this.maskRef.current?.classList.add('yon-drawer-enter-background');
                    this.contentRef.current?.classList.add(`yon-entered-${position}`);
                });
            });
        }
        if (visible !== nextProps.visible && !nextProps.visible){
            // 说明此时要关闭drawer
            setTimeout(() => {
                this.maskRef.current?.classList.add('yon-drawer-fade-background');
                this.contentRef.current?.classList.remove(`yon-entered-${position}`);
            });
            setTimeout(() => {
                this.setState(state => {
                    return {
                        ...state,
                        visible: false
                    }
                });
            }, 300);
        }
    }

    render (){
        const { children, onClose, position, width, height, renderToCurrentFather } = this.props;
        const { visible } = this.state;
        return <div className = 'yon-drawer-box'>
            {
                visible && <div className = {`yon-drawer-mask-box ${renderToCurrentFather ? 'yon-drawer-mask-box-fixedContainer' : ''}`} ref={ this.maskRef } onClick={ () => onClose && onClose() }>
                    <div className = {`yon-drawer-content-box-${position}`} ref={ this.contentRef } style={{
                        width: this.computeWidth(position, width),
                        height: this.computeHeight(position, height)
                    }}>
                        {
                            children
                        }
                    </div>
                </div>
            }
        </div>
    }
}