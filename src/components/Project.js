import React, { Component } from 'react';
import axios from 'axios';
import './Project.css';

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: null
        };
    }

    componentDidMount() {
        axios.get("https://api.github.com/repos/walz0/" + this.props.repo, {
            headers: {
                Authorization: "Basic " + process.env.REACT_APP_GITHUB_AUTH
            }})
            .then((res) => {
                this.setState({ description: res.data.description })
            })
    }

    render() {
        if (this.state.description == null) {
            return (<div></div>)
        }
        else {
            return (
                <div className="Project">
                    <div className="project-title">{"λ " + this.props.repo}</div>
                    <div className="project-desc">{ "> " + this.state.description }</div>
                    <div className="github">
                        <a target={"_blank"} href={ "https://github.com/walz0/" + this.props.repo }>{"</> src"}</a>
                    </div>
                </div>
            )
        }
    }
}
