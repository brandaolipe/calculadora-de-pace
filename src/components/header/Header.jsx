import React from 'react';
import './header.css';
import logo from '../../assets/img/logo-runner.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  
  return (
    <>
      <div class="container-fluid">
        <header class="row" id="header">
          <div id="logo-container">
            <img src={logo} alt="corredor" id="logo" />
          </div>
        </header>
      </div>
    </>
  )
}