import React, { Component } from 'react';

export default class MyPropsComponent extends Component {
    propTypes: {
        name: React.PropTypes.string.isRequired,
        time: React.PropTypes.number.oneOf([0, 1, 100])
    }

    render(){
        return <div>Hello, {this.props.name}! {this.props.time}s elapsed.</div>;
        /* Hello, World! 0s elapsed. */
    }
}

/*
 * How to call this component:
 * <MyPropsComponent name="World" time={timer}></MyPropsComponent>
 */


/* More details about propTypes and validation:
 * https://facebook.github.io/react/docs/reusable-components.html
 */
