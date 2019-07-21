import React from 'react';
import ReactDom from 'react-dom';

export default class DateDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayTime: new Date() };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        console.clear("Clearing interval : " + this.intervalId);
        clearInterval(this.intervalId);
    }

    tick() {
        console.log('ref = ', this);
        this.setState({ displayTime: new Date() });
    }

    render() {
        return (<div> Time is {this.state.displayTime.toString()}</div>);
    }

};
