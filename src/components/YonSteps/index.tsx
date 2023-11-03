import React from 'react';
import YonStep from './YonStep';
import { Provider } from './context';
import './index.scss';

interface Props {
    current?: number,
    direction?: string,
    className?: string,
    children?: React.ReactNode | ( () => React.ReactNode ),
}

class YonSteps extends React.Component<Props> {
    // 约束外部props
    static defaultProps: Props = {
        current: 1,
        direction: 'horizontal'
    };
    // 约束内部props
    static YonStep: typeof YonStep;
    // 约束内部state
    constructor(props: any) {
        super(props);
    }

    componentDidMount (){
        const { children } = this.props;
        if (Array.isArray(children)){
            
        }
    }

    render (){
        const { direction, className, children } = this.props;
        return <div className = { ` ${ direction === 'horizontal' ? 'yon-horizontal-steps' : 'yon-vertical-steps' } ${className} ` }>
            <Provider value={{ direction }}>
                {
                    <>
                        {children}
                    </>
                }
            </Provider>
        </div>
    }
}

YonSteps.YonStep = YonStep;

export default YonSteps;