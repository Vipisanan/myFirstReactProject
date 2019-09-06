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
        console.log("updateState")

        this.setState({data: e.target.value});
    }

    render() {
        console.log('main render');
        return (
            <div>
                <Content myDataProp={this.state.data}
                         updateStateProp={this.updateState}>
                </Content>
            </div>
        );
    }

}


class Content extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProp}
                       onChange={this.props.updateStateProp}/>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default Hello;