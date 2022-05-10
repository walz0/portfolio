import React, { Component } from 'react';
import Code from './Code';
import './Home.css';
import Terminal from './Terminal';
import Project from './Project';
import Section from './Section';
import GitHubCalendar from 'react-github-calendar';

export default class Home extends Component {
    render() {
        const exampleTheme = {
            background: 'transparent',
            text: '#ffffff',
            grade4: 'hsl(338, 78%, 30%)',
            grade3: 'hsl(338, 78%, 44%)',
            grade2: 'hsl(338, 78%, 58%)',
            grade1: 'hsl(338, 78%, 72%)',
            grade0: '#eee',
        };

        return (
            <div className="Home">
                <div className="container">
                    <Code text={
                        `λ whoami
                        > Aidan Walz`
                    } />
                    <Terminal />
                </div>
                <Section 
                    title="Github Statistics" 
                    element={ <GitHubCalendar 
                        username="walz0" 
                        theme={exampleTheme} 
                        /> }/>
                <Project 
                    title={"papel"} 
                    desc={"A raw text document router for writing papers in APA format"}
                    git={"https://www.github.com/walz0/papel"} />
                <Project 
                    title={"stock-py"} 
                    desc={"A library of functions for scraping and analyzing stock market data"}
                    git={"https://www.github.com/walz0/papel"} />
                <Project 
                    title={"papel"} 
                    desc={"A raw text document router for writing papers in APA format"}
                    git={"https://www.github.com/walz0/papel"} />
                <Project 
                    title={"papel"} 
                    desc={"A raw text document router for writing papers in APA format"}
                    git={"https://www.github.com/walz0/papel"} />
               <Project 
                    title={"papel"} 
                    desc={"A raw text document router for writing papers in APA format"}
                    git={"https://www.github.com/walz0/papel"} />
            </div>
        )
    }
}
