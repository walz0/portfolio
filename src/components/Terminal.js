import React, { Component } from 'react'
import './Terminal.css';

export default class Terminal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            lines: [],
            user: "root",
            wd: "~",
            prevPath: "",
            fs: {
                "~": {
                    "code": {},
                    "secret": {}
                }
            }
        };

        this.ref = React.createRef();
    }

    // Push the latest command into history and execute
    push(input) {
        // Parse input to remove undefined output
        let parsed = []
        for (var i = 0; i < input.length; i++) {
            if (input[i] !== undefined) {
                parsed.push(input[i]);
            }
        }
        this.setState({
            lines: 
                this.state.lines.concat(
                    parsed
                )
        });
    }

    getCommand(input) {
        const commands = {
            "pwd": () => { 
                let base = "~";
                // this.push(this.state.user + ":" + this.state.wd + input);
                if (this.state.wd !== "~") {
                    return ([
                        this.state.user + ":" + this.state.wd + "$ " + input,
                        base + this.state.wd.slice(1)
                    ]); 
                } 
                else {
                    return this.state.user;
                }
            },
            "ls": () => { 
                // Search file system for current directory
                // Print dirs and files within current directory
                let path = this.state.wd.split('/');

                // All dirs that have been traversed
                let traversed = [];
                // Temp var for traversing fs
                let temp = []; 

                for (var i = 0; i < path.length; i++) {
                    if (JSON.stringify(path) == JSON.stringify(traversed)) {
                        // Working dir has been found
                        break;
                    }
                    // Temp var for traversing fs
                    temp = this.state.fs[path[i]];
                    // Push dir
                    traversed.push(path[i]);
                }
                return (Object.keys(temp).join('  '));
            },
            "l": () => { this.getCommand("ls") },
            "cd": (path) => {

            },
            "mkdir": (dirName) => {
                // Search file system for current directory
                // Print dirs and files within current directory
                let path = this.state.wd.split('/');

                // All dirs that have been traversed
                let traversed = [];
                // Temp var for traversing fs
                let temp = []; 

                for (var i = 0; i < path.length; i++) {
                    if (JSON.stringify(path) == JSON.stringify(traversed)) {
                        // Working dir has been found
                        break;
                    }
                    // Temp var for traversing fs
                    temp = this.state.fs[path[i]];
                    // Push dir
                    traversed.push(path[i]);
                }

                // Create new directory
                temp[dirName] = {};
            },
            "banner": () => { return (`
                This is a banner
                ===========================
                :)
            `); },
            "whoami": () => { return (this.state.user) }
        }


        let argv = input.split(" ");

        let hasParams = false;
        // If command has parameters
        if (argv.length > 1) {
            hasParams = true;
        }

        let selected = "";
        for (var c in commands) {
            if (argv[0] === c) {
                selected = c;
            }
        }

        if (selected !== "") {
            let echo = `${this.state.user}:${this.state.wd}$ ${input}`;
            if (hasParams) {
                this.push([echo, commands[selected](argv.slice(1))]);
            } else {
                this.push([echo, commands[selected]()]);
            }
        }
        else {
            this.push(`${input}: command not found`);
        }
    }

    handleInput(e) {
        let pos = this.state.user.length + 2 + this.state.wd.length + 1;
        this.setState({
            inputText: e.target.value.slice(pos)
        });
        
        const inputHistory = this.ref.current;
        if (inputHistory != null) {
            inputHistory.scrollTop = inputHistory.scrollHeight + 50;
        }

        if (e.target.selectionStart < pos) {
            e.target.selectionStart = pos;
        }
    }

    inputBox() {
        return(
            <input 
                value={ this.state.user + ":" + this.state.wd + "$ " + this.state.inputText}
                onChange={this.handleInput.bind(this)}
                onKeyDown={this.submitInput.bind(this)}
                onClick={this.handleInput.bind(this)}
                spellCheck={false}></input>
        );
    }

    inputHistory() {
        // Fill box with lines to push new ones to the bottom
        let output = ``;
        for (var i = 0; i < 200; i++) {
            output += `⠀
            `;
        }

        let lines = this.state.lines;
        for (i = 0; i < lines.length; i++) {
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

        if (key === enter) {
            this.getCommand(this.state.inputText);
            this.setState({ 
                inputText: "",
                },
                () => {
                    // Scroll terminal to bottom
                    const inputHistory = this.ref.current;
                    if (inputHistory != null) {
                        inputHistory.scrollTop = inputHistory.scrollHeight + 50;
                    }
                }
            );
        }
        else {
            if (e.target.selectionStart <= 2) {
                e.target.selectionStart = 2;
            }
        }
    }

    render() {
        return (
            <div className="Terminal">
                {/* <div className="titleBar"></div> */}
                { this.inputHistory() }
                { this.inputBox() }
            </div>
        )
    }
}
