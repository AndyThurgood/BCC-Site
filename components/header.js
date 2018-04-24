import React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

const Header = () =>(  
    <div className="navbar navbar-inverse navbar-expand-md navbar-fixed-top sticky-navigation overlay-layer-2" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo-nav.png" alt="boxconceptsLogo"></img>
                    <h5 className="white-text" >Box Concepts</h5>
                </Link>
            </div>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="nav navbar-nav navbar-left main-navigation small-text">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;