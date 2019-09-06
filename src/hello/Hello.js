import React from 'react';
import './hello.css';


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        };

        this.setStateHandler = this.setStateHandler.bind(this);

    };
    setStateHandler(){
        var item = "setState...";
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };
    render() {
        return (
            <div className="hello">
                <div>
                    <button onClick = {this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.data}</h4>
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