import React from 'react';
import ReactDOM from 'react-dom';
import './hello.css';


class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...',
            date: 'vipi'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        console.log('main render');
        return (
            <div>
                <div>
                    <input type="text" value={this.state.data}
                           onChange={this.updateState}/>
                    <h4>{this.state.data} +  {this.state.date}</h4>
                </div>
            </div>
        );
    }

}




//it's for lifecycle
class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        console.log('sub render');

        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Hello;