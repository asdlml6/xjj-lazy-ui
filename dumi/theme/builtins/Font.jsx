import React from 'react';

export default class Font extends React.Component {
    constructor(props){
        super(props)
    }
    render (){
        return <div style={{ color: 'cornflowerblue' }}>{this.props.children}</div>
    }
}