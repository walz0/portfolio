import React, { Component } from 'react';
import './Navbar.css';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <a href='/'>
                    <img className="logo" src={logo} alt="logo"></img>
                </a>
                <ul>
                    {/* <div className="github-link">
                        <a href="https://www.github.com/walz0/" title="github.com/walz0">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div> */}
                    <li>
                        <a href="/about">about</a>
                    </li>
                    <li>
                        <a href="/contact">contact</a>
                    </li>
                    <li>
                        <a href="/blog">blog</a>
                    </li>
                </ul>                
            </div>
        )
    }
}
