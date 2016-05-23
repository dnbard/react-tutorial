import React, { Component } from 'react';

class ComponentA extends Component{
    render(){
        return (<div>
            {this.props.children}
            <div>{this.props.value}</div>
        </div>);
    }
}


export default ComponentA;
