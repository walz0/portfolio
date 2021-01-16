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
            fs: {
                "": {
                    "code": {},
                    "secret": {}
                }
            }
        };

        this.ref = React.createRef();
    }

    push(input) {
        this.setState({
            lines: 
                this.state.lines.concat(
                    input 
                )
        });
    }

    getCommand(input) {
        const commands = {
            "pwd": () => { 
                let base = "/root";
                this.push(this.state.user + ":" + this.state.wd + input);
                if (this.state.wd != "~") {
                    this.push([
                        this.state.user + ":" + this.state.wd + " " + input,
                        base + this.state.wd.slice(1)
                    ]); 
                } else {
                    this.push([
                        this.state.user + ":" + this.state.wd + " " + input,
                        base
                    ]); 
                }
            },
            "l": () => { 
                // Search file system for current directory
                // Print dirs and files within current directory
                let path = this.state.wd.split('/');
                let currDir;

                // Implement get parent dir

                for (var dir in path) {
                    currDir = path[dir];
                }
                let output = currDir;
                this.push(currDir);
            },
            "ls": () => {},
            "cd": (path) => {
                let prefix = (this.state.wd == "") ? "" : this.state.wd + "/";
                if (path.includes("/")) {
                    // Relative path
                    if (path.length - 1 > path.indexOf("/")) {
                        this.setState({"wd": prefix + path});
                    }
                    // Absolute path
                    else { this.setState({"wd": path}) }
                }
                // Relative path without /
                else { this.setState({"wd": prefix + path}); }
            },
            "mkdir": (dir_name) => {},
            "banner": () => { this.push(`
                This is a banner
                ===========================
                :)
            `); }
        }


        let argv = input.split(" ");

        let hasParams = false;
        // If command has parameters
        if (argv.length > 1) {
            hasParams = true;
        }

        let selected = "";
        for (var c in commands) {
            if (argv[0] == c) {
                selected = c;
            }
        }

        if (selected != "") {
            if (hasParams) {
                commands[selected](argv.slice(1));
            } else {
                commands[selected]();
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
                onClick={this.handleInput.bind(this)}></input>
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
