import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, Collapse, Navbar} from 'reactstrap';
import logo from '../../assets/images/logo.png';
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };

    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    // window.addEventListener("scroll", () => {
    // setScroll(window.scrollY > 50);
    // });
    // }, []);
    return (
        <Fragment>
            <header className="HddrBg FxdHeader">
                <nav className="navbar navbar-expand-lg">
                    <div className="container container-1200">
                        <div className="logo_header">
                            <a href="/" className=""><img src={logo} className="img-fluid" alt="bowo" /></a>
                        </div>
                        <button type="button" onClick={toggleNav} className="plate navbar-toggle CollBTn collapsed sm-only ui">
                            <svg onClick={ToggleClass} className={isActive ? "ham hamRotate ham8" : "ham hamRotate ham8 active"} viewBox="0 0 100 100" width="60" >
                                <path
                                    className="line top"
                                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                                <path
                                    className="line middle"
                                    d="m 30,50 h 40" />
                                <path
                                    className="line bottom"
                                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                            </svg>
                        </button>
                        <Collapse isOpen={isOpen} navbar className="CllpsMenu w-100">
                            <ul className="navbar-nav mx-auto HddrLnks HdrSroll">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Stake</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Bonding</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Governance</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Neo Banking</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>
                            </ul>
                            <div className="HddrBtns ml-xl-5 mb-3 mb-lg-0">
                                <a href="#" className="btn BtnPrimry Btn120-42">
                                    Connect Wallet
                                </a>
                            </div>
                        </Collapse>
                        
                    </div>
                </nav>
            </header>       
        </Fragment>
    );
   
}

export default Header;