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
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                    <li>
                        <a href={process.env.REACT_APP_API + "/AidanWalz_resume.pdf"} target="_blank">
                        resume
                        </a>
                    </li>
                </ul>                
            </div>
        )
    }
}