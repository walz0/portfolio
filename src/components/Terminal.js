import React, { Component } from 'react'
import './Terminal.css';

export default class Terminal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            lines: []
        };
    }

    handleInput(e) {
        this.setState({
            inputText: e.target.value.slice(2)
        });
    }

    inputBox() {
        return(
            <input 
                value={ "$ " + this.state.inputText}
                onChange={this.handleInput.bind(this)}></input>
        );
    }

    inputHistory() {
        let output = ``;
        let lines = this.state.lines;
        for (var i = 0; i < lines.length; i++) {
            output += `${lines[i]}
            `;
        }

        output = output.replace(/^\s+/mg, "")

        return(
            <pre>
                { output }
            </pre>
        );
    }

    submitInput() {
        this.setState({ 
            inputText: "",
            lines: 
                this.state.lines.concat(
                    this.state.inputText
                )}
        );
    }

    render() {
        return (
            <div className="Terminal">
                { this.inputHistory() }
                { this.inputBox() }
                <button onClick={this.submitInput.bind(this)}>Submit</button>
            </div>
        )
    }
}
