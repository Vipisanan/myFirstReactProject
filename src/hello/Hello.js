import React from 'react';
import './hello.css';


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            header: "Header from state...",
            content: "Content from state..."
        }
    }
    render() {
        return (
            <div className="hello">
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <h1>{Hello.defaultProps.headerProp}</h1>
                <h2>{this.state.content}</h2>
            </div>
        );
    }

}
Hello.defaultProps = {
    headerProp: "Header from props...1",
    contentProp:"Content from props...1"
};

export default Hello;