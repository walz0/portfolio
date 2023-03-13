import React, { Component } from 'react';
import Code from './Code';
import './Home.css';
import Terminal from './Terminal';
import Project from './Project';
import Section from './Section';
import Cascade from './Cascade';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <Code text={
                        `λ whoami
                        > Aidan Walz`
                    } />
                    <Terminal />
                </div>
                <Cascade />
                <Section 
                    title="projects"
                    // desc="section"
                    element={
                        <div className='project-container'>
                            <Project 
                                title={"frc-match-dl"} />
                            <Project 
                                title={"papel"} />
                            <Project 
                                title={"frc-analysis"}
                                demo={"https://walz0.github.io/frc"} />
                        </div>
                    }/>
                <Section 
                    title="open source"
                    element={<div />}/>
            </div>
        )
    }
}
