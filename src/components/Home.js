import React, { Component } from 'react';
import Cascade from './Cascade';
import Code from './Code';
import './Home.css';
import Terminal from './Terminal';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    {/* <div className="paragraph">
                    </div> */}
                    <Code text={
                        `$ whoami
                        > Aidan Walz`
                    } />
                    <Terminal />
                </div>
                <Cascade/>
            </div>
        )
    }
}
