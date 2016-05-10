import React, { Component } from 'react';

export default class MyComponent extends Component {
    constructor(){
        super();

        /* initial state of the component */
        this.state = {
            target: 'World'
        };
    }

    componentWillMount(){
        /* Invoked once immediately before the initial rendering occurs. */
    }

    componentDidMount(){
        /* Invoked once immediately after the initial rendering occurs.
         * At this point you can access the underlying DOM representation ("refs").
         * The componentDidMount method of child components is invoked before that method of parent component.


         Perform next operations in this method:
            * integrate with other JavaScript frameworks
            * set timers using setTimeout or setInterval
            * send AJAX requests
         */
    }

    componentWillReceiveProps(updatedProps){
        /* Invoked when a component is receiving new props.
         * Not called for the initial render.
         * The old props can be accessed via this.props
         */
    }

    shouldComponentUpdate(updatedProps, updatedState){
        /* Invoked before rendering when new props or state are being received.
         * Not called for the initial render.
         * Return false to not trigger component update (rendering).
         * By default, shouldComponentUpdate always returns true.
         * If performance is a bottleneck then use shouldComponentUpdate to speed up your app.
         */
    }

    componentWillUpdate(updatedProps, updatedState){
        /* Invoked immediately before rendering when new props or state are being received.
         * Not called for the initial render.
         * If you need to update state in response to a prop change, use componentWillReceiveProps instead.
         */
    }

    componentDidUpdate(updatedProps, updatedState){
        /* Invoked immediately after the component's updates are flushed to the DOM.
         * Not called for the initial render.
         * Use it to operate on the DOM when the component has been updated.
         */
    }

    componentWillUnmount(){
        /* Invoked immediately before a component is unmounted from the DOM.
         * Perform any necessary cleanup in this method.
         */
    }

    render(){
        return <div>Hello, {this.state.target}!</div>;
    }
}
