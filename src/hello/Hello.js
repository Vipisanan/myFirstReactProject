import React from 'react';
import ReactDOM from 'react-dom';
import './hello.css';


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        };

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);

    };
    setStateHandler(){
        var item = "setState...";
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    // setState() method is used to update the state of the component. This method will not replace the state, but only add changes to the original state.
    };
    forceUpdateHandler() {
        this.forceUpdate();
    //    Sometimes we might want to update the component manually. This can be achieved using the forceUpdate() method.
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    //    For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.
    };
    render() {
        return (
            <div className="hello">
                {/*setState()*/}
                <div>
                    <button onClick = {this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.data}</h4>
                </div>
                {/*fource Update*/}
                <div>
                    <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                    <h4>Random number: {Math.random()}</h4>
                </div>
                {/*Find Dom Node*/}
                <div>
                    <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                    <div id = "myDiv">NODE</div>
                </div>

            </div>
        );
    }

}
Hello.defaultProps = {
    headerProp: "Header from props...1",
    contentProp:"Content from props...1"
};

export default Hello;