"use client";
import React, { useState } from 'react';
import './Navbar.module.css'; 
import { CgCreditCard } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
// import logo from '../../../public/Group 11.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dvgvsqeeq/image/upload/v1712419189/v82f53063gg8ff1elbfi.svg" alt="Logo"/>
                </div>
                {/* <button className="hamburger-btn" onClick={toggleMenu}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button> */}
                <label class="nav-input" htmlFor="searchInput">
                    <BiSearch />
                    <input type="text" className="nav-input" id="searchInput" placeholder="Search by Address, Validator or Txn Hash" />
                </label>
            </div>
            <ul className="navbar-nav" id="navbar-nav">

                <span className="nav-item">
                    <a href="#" className="nav-link">Subnets</a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">Validators</a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">Developers</a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">Resources</a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">5xdabgos...</a>
                    <CgCreditCard style={{
                        color: "#ffffff",
                        fontSize: "22px"
                    }} />

                </span>
            </ul>
        </nav>

    );
};

export default Navbar;
