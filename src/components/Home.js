import React, { Component } from 'react';
import Cascade from './Cascade';
import Code from './Code';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="paragraph">
                        Welcome to my blog.
                    </div>
                    <Code text={
                        `$ whoami
                        > Aidan Walz`
                    } />
                </div>
                <Cascade/>
            </div>
        )
    }
}
