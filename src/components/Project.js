import React, { Component } from 'react';
import axios from 'axios';
import './Project.css';

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: undefined,
            lang: undefined,
            langIcon: undefined
        };
    }

    componentDidMount() {
        axios.get('https://api.github.com/repos/walz0/' + this.props.title, {
                headers: { "Authorization": "Bearer " + process.env.REACT_APP_GITHUB_TOKEN }
            })
            .then((response) => {
                this.setState({
                    desc: response.data["description"]
                })
            })
            .catch((err) => {})
        axios.get('https://api.github.com/repos/walz0/' + this.props.title + '/languages', {
                headers: { "Authorization": "Bearer " + process.env.REACT_APP_GITHUB_TOKEN }
            })
            .then((response) => {
                // Select languages with most lines of code
                let icon = Object.keys(response.data)[0].toLowerCase()
                if (icon == "html") { icon = "html5" }
                if (icon == "c++") { icon = "cplusplus" }
                this.setState({
                    lang: Object.keys(response.data)[0],
                    langIcon: icon
                })
            })
            .catch((err) => {})
    }

    render() {
        console.log(this.state.lang)
        return (
            <div className="Project">
                <div className="project-title">{ this.props.title }</div>
                <div className="project-desc">{ this.state.desc }</div>
                <div className="github">
                    <a href={ "https://github.com/walz0/" + this.props.title }>Source Code</a>
                </div>
                <div className="demo">
                    <a>Demo</a>
                </div>
                <div className="language">
                    { this.state.lang ? <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.state.langIcon}/${this.state.langIcon}-original.svg`} 
                        className="lang-icon"/> : null}
                    { this.state.lang }
                </div>
            </div>
        )
    }
}
