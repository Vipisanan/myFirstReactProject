import React from 'react';
import './hello.css';


class Hello extends React.Component {
    constructor(props) {
        super(props);

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
            </div>
        );
    }
}
export default Hello;