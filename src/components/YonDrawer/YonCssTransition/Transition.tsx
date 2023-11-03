import React from 'react';
import ReactDOM from 'react-dom';
import { YonTransitionProps, YonTransitionStatus } from './interface';

export default class Transition extends React.Component<YonTransitionProps, {
    status ?: string
}> {
    nextCallback: ((event: any) => void) | undefined | null;
    constructor(props: any){
        super(props);
        this.state = {
            status: this.props.in ? 'entered' : 'leaved'
        }
    }

    componentDidUpdate(prevProps: YonTransitionProps){
        let nextStatus = null;
        if (prevProps.in !== this.props.in){
            // 执行相应动画
            if (this.props.in){
                if (this.state.status !== 'entering' && this.state.status !== 'entered'){
                    nextStatus = 'entering';
                }
            } else {
                if (this.state.status === 'entering' || this.state.status === 'entered'){
                    nextStatus = 'leaveing'
                }
            }
        }
        this.updateStatus(false, nextStatus);
    }

    // 利用闭包特性来控制callback是否被取消
    setNextCallback = (callback: any) => {
        let active = true;
        this.nextCallback = () => {
            if (active){
                active = false;
                this.nextCallback = null;
                callback();
            }
        };
        const cancel = () => {
            active = false;
        };
        let result = {
            nextCallback : this.nextCallback,
            cancel
        }
        return result;
    }

    safeSetState = (state: any, callback: any) => {
        let cb = this.setNextCallback(callback);
        this.setState(state, () => cb.nextCallback && cb.nextCallback);
    }

    onTransitionEnd = (timeout: number, callback: any) => {
        const cb = this.setNextCallback(callback);
        setTimeout(() => {
            cb.nextCallback && cb.nextCallback(null);
        }, timeout);
    }

    // 执行进场相关操作
    performEnter = (mounting: boolean) => {
        const { onEnter, onEntering, onEntered, timeout } = this.props;
        const node = ReactDOM.findDOMNode(this) as Element;
        onEnter && onEnter(node, mounting);
        this.safeSetState({status: 'entering'}, () => {
            onEntering && onEntering(node, mounting);
            this.onTransitionEnd(timeout || 0, () => {
                this.safeSetState({status: 'entered'}, () => {
                    onEntered && onEntered(node, mounting);
                });
            });
        });
    }

    // 执行退场相关操作
    performLeave = () => {
        const { onLeave, onLeaveing, onLeaved, timeout } = this.props;
        const node = ReactDOM.findDOMNode(this) as Element;
        onLeave && onLeave(node);
        this.safeSetState({sttaus: 'leaveing'}, () => {
            onLeaveing && onLeaveing(node);
            this.onTransitionEnd(timeout || 0, () => {
                this.safeSetState({status: 'leaved'}, () => {
                    onLeaved && onLeaved(node);
                });
            });
        });
    };

    // 更新状态
    updateStatus = (mounting = false, nextStatus : YonTransitionStatus | null | string) => {
        if (nextStatus === null){
            return
        }
        if (nextStatus === 'entering'){
            this.performEnter(mounting);
        } else {
            this.performLeave();
        }
    }

    render (){
        const { children } = this.props;
        return <>
            { children }
        </>
    }
}