import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Project">
                <div className="project-title">{ this.props.title }</div>
                <div className="project-desc">{ this.props.desc }</div>
                <div className="github">{ this.props.github }</div>
            </div>
        )
    }
}
