"use client";
import React, { useState } from 'react';
import './Navbar.css'; 
import { CgCreditCard } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
// import logo from '../../../public/Group 11.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dvgvsqeeq/image/upload/v1712419189/v82f53063gg8ff1elbfi.svg" alt="Logo"/>
                </div>
              
                <label className="nav-input" htmlFor="searchInput">
                    <BiSearch />
                    <input type="text" className="input" id="searchInput" placeholder="Search by Address, Validator or Txn Hash" />
                </label>
                <button className="hamburger-btn" onClick={toggleMenu}>
                    <HiMenuAlt4 style={{ fontSize: "35px" }} />
                </button>
                
            </div>
            <ul className={`navbar-nav ${isOpen?"active":''}`} id="navbar-nav">

                <span className="nav-item">
                    <a href="#" className="nav-link">Subnets <RiArrowDropDownLine style={{ fontSize: "15px" }} /></a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">Validators <RiArrowDropDownLine /></a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">Developers <RiArrowDropDownLine /></a>
                    <ul className="dropdown-menu">
                        <span><a href="#">Option 1</a></span>
                        <span><a href="#">Option 2</a></span>
                        <span><a href="#">Option 3</a></span>
                    </ul>
                </span>
                <span className="nav-item">
                    <a href="#" className="nav-link">Resources <RiArrowDropDownLine /></a>
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
