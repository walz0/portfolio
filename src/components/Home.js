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
                    title="Projects"
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
                {/* <Project 
                    title={"frc-match-dl"} 
                    git={"https://www.github.com/walz0/papel"} />
                <Project 
                    title={"stock-py"} 
                    git={"https://www.github.com/walz0/papel"} />
                <Project 
                    title={"papel"} 
                    git={"https://www.github.com/walz0/papel"} />
                <Project 
                    title={"frc-analysis"} 
                    git={"https://www.github.com/walz0/papel"} />
               <Project 
                    title={"Ishiiruka"} 
                    git={"https://www.github.com/walz0/papel"} /> */}
            </div>
        )
    }
}
