import React, { Component } from 'react'
import './Terminal.css';

export default class Terminal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            lines: []
        };

        this.ref = React.createRef();
    }

    handleInput(e) {
        this.setState({
            inputText: e.target.value.slice(2)
        });

        const inputHistory = this.ref.current;
        if (inputHistory != null) {
            inputHistory.scrollTop = inputHistory.scrollHeight + 50;
        }
    }

    inputBox() {
        return(
            <input 
                value={ "$ " + this.state.inputText}
                onChange={this.handleInput.bind(this)}
                onKeyDown={this.submitInput.bind(this)}></input>
        );
    }

    inputHistory() {
        let output = ``;
        for (var i = 0; i < 200; i++) {
            output += `⠀
            `;
        }

        let lines = this.state.lines;
        for (var i = 0; i < lines.length; i++) {
            output += `${lines[i]}
            `;
        }

        output = output.replace(/^\s+/mg, "")

        return(
            <pre ref={this.ref}>
                { output }
            </pre>
        );
    }

    submitInput(e) {
        let key = e.keyCode;
        let enter = 13;

        if (key == enter) {
            this.setState({ 
                inputText: "",
                lines: 
                    this.state.lines.concat(
                        this.state.inputText
                    )},
                () => {
                    // Scroll terminal to bottom
                    const inputHistory = this.ref.current;
                    if (inputHistory != null) {
                        inputHistory.scrollTop = inputHistory.scrollHeight + 50;
                    }
                }
            );
        }

    }

    render() {
        return (
            <div className="Terminal">
                { this.inputHistory() }
                { this.inputBox() }
            </div>
        )
    }
}
