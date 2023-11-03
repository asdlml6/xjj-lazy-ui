import React from 'react';
import { Consumer } from './context';
import './YonStep.scss';

enum StatusEnum {
    finish = 'finish',
    process = 'process',
    wait = 'wait',
    error = 'error'
}

interface Props {
    title ?: string,
    description ?: string | JSX.Element,
    isFinal ?: boolean,
    current ?: boolean,
    status ?: StatusEnum,
    lineColor ?: string,
    width ?: string
}

export default class YonStep extends React.Component<Props> {
    static defaultProps: Props = {
        title: '这是一个状态',
        description: '',
        isFinal: false,
        status: StatusEnum.finish,
        lineColor: '#DCDCDC',
        width: '150px'
    };

    constructor(props: any){
        super(props);
    }

    render (){
        const { title, description, isFinal, status, lineColor, width } = this.props;
        return <Consumer>
            {
                (data : any) => {
                    if (data.direction === 'vertical'){
                        return <div className = 'YonStep-vertical-item' style={{ width }}>
                        <div className = 'left-box'>
                            <div className = 'left-box-ball'>
                                {
                                    status !== 'process' && <div className = { status === 'finish' ? 'finish-ball' : status === 'wait' ? 'wait-ball' : 'error-ball' }></div>
                                }
                                {
                                    status === 'process' && <div className = 'process-ball'>
                                        <div className = 'ball'></div>
                                    </div>
                                }
                            </div>
                            <div className = 'left-box-line'>
                                <div className = 'line' style={isFinal ? {} :{ background: lineColor }}></div>
                            </div>
                        </div>
                        <div className = 'right-box'>
                            <div className = 'right-box-title'>{title}</div>
                            <div className = 'right-box-description'>{description}</div>
                        </div>
                        </div>
                    } else {
                        return <div className = 'YonStep-item' style={{ width }}>
                            <div className = 'YonStep-item-title'>{title}</div>
                            <div className = 'ballanline-box'>
                                {
                                    status !== 'process' && <div className = { `${ status === 'wait' ? 'ball-wait' : status === 'error' ? 'ball-error' : 'ballanline-box-ball' }`}></div>
                                }
                                {
                                    status === 'process' && <div className = 'ballanline-box-final-ball'>
                                        <div className = 'ball'></div>
                                    </div>
                                }
                                <div className = 'ballanline-box-line'>
                                    {!isFinal && <div className = 'line' style={{ background: lineColor }}></div>}
                                </div>
                            </div>
                            <div className = 'yonStep-item-people'>
                                { description }
                            </div>
                        </div>
                    }
                }
            }
        </Consumer>
    }
}