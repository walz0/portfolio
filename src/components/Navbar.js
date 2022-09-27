import React, { Component } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
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
