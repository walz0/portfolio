import React, { Component } from 'react';
import './Section.css';

export default class Section extends Component {
    render() {
        return (
            <div className="Section">
                <div className="title">
                    { this.props.title }
                </div>
                <div className="desc">
                    { this.props.desc }
                </div>
                <div className="element">
                    { this.props.element }
                </div>
            </div>
        )
    }
}
