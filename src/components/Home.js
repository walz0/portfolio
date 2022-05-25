import React, { Component } from 'react';
import Code from './Code';
import './Home.css';
import Terminal from './Terminal';
import Project from './Project';
import Section from './Section';
import GitHubCalendar from 'react-github-calendar';

export default class Home extends Component {
    render() {
        const colorScheme = {
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
                    title="hmmm" 
                    desc="fuck"
                    element={<div></div>} />
                <Project repo={"papel"} />
                <Project repo={"stock-py"} />
                <Project repo={"frc-analysis"} />
                <Project repo={"frc-match-dl"} />
                <Project repo={"twitter-dm-bot"} />
                <Project repo={"emdr"} />
                {/*
                    <Project repo={"as-website"} />
                    <Project repo={"walz-flooring"} />
                    <Project repo={"backpack"} />
                    <Project repo={"pebbl"} />
                    <Project repo={"nft-generator"} />
                */}
            </div>
        )
    }
}
