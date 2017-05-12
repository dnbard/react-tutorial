import React, { Component } from 'react';

class ComponentB extends Component{
    onChange(e){
        if (typeof this.props.onChange === 'function' && !this.props.readOnly){
            this.props.onChange(e.target.value);
        }
    }

    render(){
        return (<div>
            <input value={this.props.value} onChange={this.onChange.bind(this)} />
        </div>);
    }
}


export default ComponentA;
