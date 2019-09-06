import React from 'react';
import './hello.css';


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        };

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

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
    render() {
        return (
            <div className="hello">
                <div>
                    <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                    <h4>Random number: {Math.random()}</h4>
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