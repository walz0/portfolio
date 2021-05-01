import React, { Component } from 'react'
import './Code.css'

export default class Code extends Component {
    async componentDidMount() {
        await this.props.text;
    }

    textBox() {
        let text = this.props.text.replace(/^\s+/mg, "")

        return(
        <pre>
            { text }
        </pre>)
    }

    render() {
        if (this.props.text != null) {
            return (
                <div className="Code">
                    { this.props.text ? this.textBox() : null }
                </div>
            )
        }
        else {
            return <div></div>;
        }
    }
}
