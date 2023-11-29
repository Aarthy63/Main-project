import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, Collapse, Navbar} from 'reactstrap';

import logoInr from '../../assets/images/logo.png';
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
            <header class="Hddrg InrHddr FxdHeader">
                <div class="FxedTop">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid px-0">
                            <div class="LogoTitlSec">
                                <div class="logo_header align-items-center InrLogoSec">
                                    <a class="navbar-brand" href="index.html">
                                        <img src={logoInr} class="img-fluid" />
                                    </a>
                                    <div class="SidRitMnu">
                                        <svg id="hamburger" onclick="this.classList.toggle('active')" viewBox="0 0 100 100">
                                            <rect class="hamburger-line hamburger-line-1" x="20" y="50" rX="1" width="60" height="2" />
                                            <rect class="hamburger-line  hamburger-line-2" x="20" y="50" rX="1" width="60" height="2" />
                                            <rect class="hamburger-line  hamburger-line-3" x="20" y="50" rX="1" width="60" height="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="HdrTitlSec ml-4">
                                    <div class="HdrTitlCnt">
                                        <h4>Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="DskTpViewCnt">
                                <ul class="d-flex align-items-center">
                                    <li>
                                        <a href="" class="btn BtnPrimry mr-3 Btn160-42">Connect Wallet</a>
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