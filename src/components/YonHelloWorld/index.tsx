import React from 'react';
import './index.scss';

export default class YonHelloWorld extends React.Component {
  constructor(props: {} | Readonly<{}>){
    super(props);
  }
  render (){
    return <div className = 'hello-box'>hello-world</div>
  }
}