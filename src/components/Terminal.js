import React, { Component } from 'react';
import axios from 'axios';
import './Terminal.css';

export default class Terminal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            lines: [
                `
                ~
                my name is aidan, im currently a freelance developer looking to
                expand my horizons to something new and interesting. for the past
                year i have specialized in web3 apps on the ethereum and solana
                networks. i enjoy designing efficient and scalable systems to deliver
                reliable products that push expectations. my true passion lies in
                python development, many of my favorite projects are compact and
                effective scripts i wrote on a binge after an idea popped into my
                head. feel free to have a look at my work, and if you are interested
                in working together send me an email @ aidan.m.walz@gmail.com
                ~
                Type 'help' for more info on the available commands...`
            ],
            user: "root",
            wd: "~",
            prevPath: "",
            fs: {
                "~": {
                    "code": {},
                    "secret": {}
                }
            },
            version: null
        };

        this.ref = React.createRef();
    }

    componentDidMount () {
        // Scroll any init text into view
        let inputBox = this.ref.current;
        inputBox.scrollTop = inputBox.scrollHeight + 50;

        // Get total number of commits on portfolio
        axios.get('https://api.github.com/repos/walz0/portfolio/commits')
            .then((response) => {
                this.setState({
                    version: parseInt(response.data.length, 10)
                })
            })
            .catch((err) => {})
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
                if (this.state.wd !== "~") {
                    return ([
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

                return (temp == undefined) ? undefined : Object.keys(temp).join('  ');
            },
            // "l": () => { return this.getCommand("ls") },
            "cd": (newPath) => {
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

                // Do not change directory
                if (newPath[0] == ".") {
                    return undefined;
                }
                else if (newPath[0] == "..") {
                    // Get directories as list
                    let dirs = this.state.wd.split('/');
                    // Update working directory
                    this.setState({
                        wd: dirs.slice(0, dirs.length - 1).join('/')
                    });
                    return undefined;
                }
                else {
                    // Current directory environment
                    let context = temp;

                    let prefix = newPath[0].slice(0, 2);

                    // if ../path or ./path
                    if (prefix == "./") {
                        // Same behavior as without ./
                        this.setState({
                            wd: this.state.wd + '/' + newPath[0].slice(2)
                        })
                        return undefined;
                    }
                    else if (prefix == "..") {
                        
                    }
                    else {
                        this.setState({
                            wd: this.state.wd + '/' + newPath
                        })
                        return undefined;
                    }
                }
            },
            "mkdir": (dirName) => {
                if (dirName == undefined) {
                    return 'mkdir: missing operand';
                }

                // Search file system for current directory
                // Print dirs and files within current directory
                let path = this.state.wd.split('/');

                // If root
                if (path[0] == "~") {
                    let temp = this.state.fs;
                    temp['~'][dirName] = {};
                    this.setState({
                        fs: temp
                    });
                    return undefined;
                }

                // All dirs that have been traversed
                let traversed = [];
                // Temp var for traversing fs
                let temp = []; 

                for (var i = 0; i < path.length - 1; i++) {
                    if (JSON.stringify(path) == JSON.stringify(traversed)) {
                        // Working dir has been found
                        break;
                    }
                    // Temp var for traversing fs
                    temp = this.state.fs[path[i]];
                    // Push dir
                    traversed.push(path[i]);
                }

                let currDir = path[path.length - 1];
                // Create new directory
                temp[currDir][dirName] = {};
                // Update state
                this.setState({
                    fs: temp
                });
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
            let echo = `${this.state.user}:${this.state.wd}λ ${input}`;
            if (hasParams) {
                this.push([echo, commands[selected](argv.slice(1))]);
            } else {
                this.push([echo, commands[selected]()]);
            }
        }
        else {
            this.push([`${input}: command not found`]);
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
                autoFocus={ true }
                value={ this.state.user + ":" + this.state.wd + "λ " + this.state.inputText}
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
            if (i == 0) {
                output += `portfoliOS :: [Version ${this.state.version}]
                `;
            }
            output += `${lines[i]}
            `;
        }

        output = output.replace(/^\s+/mg, "");

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

    circle(color) {
        return(
            <div className="circle">
                <svg viewBox="0 0 100 100" id="circle">
                    <circle cx="50" cy="50" r="50" fill={color} />
                </svg>
            </div>
        );
    }

    render() {
        return (
            <div className="Terminal">
                <div className="titleBar">
                    <div className="controls">
                        { this.circle("#FF6059") }
                        { this.circle("#FFBD2E") }
                        { this.circle("#28CA42") }
                    </div>
                    root
                </div>
                { this.inputHistory() }
                { this.inputBox() }
            </div>
        )
    }
}
