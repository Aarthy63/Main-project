import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, Collapse, Navbar} from 'reactstrap';

import logoInr from '../../assets/images/logo.png';
import hdrCopyIcon from '../../assets/images/hdr-copy-icon.svg';
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
            <header className="Hddrg FxdHeader GvrncHdr">
                <div className="FxedTop">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container container-1200">
                            <div className="LogoTitlSec">
                                <div className="logo_header align-items-center ">
                                    <a className="navbar-brand" href="index.html">
                                        <img src={logoInr} className="img-fluid" />
                                    </a>
                                    <div className="SidRitMnu">
                                        <button type="button" onclick="this.classList.toggle('active')" className="plate navbar-toggle CollBTn collapsed sm-only ui" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-expanded="false" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                                            <svg className="ham hamRotate ham8" viewBox="0 0 100 100" width="60" onclick="this.classList.toggle('active')">
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
                                    </div>
                                </div>
                            </div>
                            <div className="DskTpViewCnt">
                                <ul className="d-flex align-items-center">
                                    <li>
                                        <button className="btn AftrLgnBtn  Btn202-42"><span><img src={hdrCopyIcon} alt="" className="img-fluid" /> </span>0x35sdf41g6sd4gs...</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>      
        </Fragment>
    );
   
}

export default Header;