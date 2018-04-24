import React from "react";

const Footer = () => (
    <div className="footer grey-bg">
        ©2014 Box Concepts Consultancy Ltd. All Rights Reserved       
        <ul className="footer-links small-text">
            <li><a href="terms" className="dark-text">Terms</a>
            </li>
            <li><a href="privacy" className="dark-text">Privacy</a>
            </li>
        </ul>
        <ul className="social-icons">
            <li><a href=""><span className="fa fa-facebook transparent-text-dark"></span></a>
            </li>
            <li><a href=""><span className="fa fa-twitter transparent-text-dark"></span></a>
            </li>
            <li><a href=""><span className="fa fa-linkedin transparent-text-dark"></span></a>
            </li>
            <li><a href=""><span className="fa fa-github transparent-text-dark"></span></a>
            </li>
        </ul>
    </div>
);

export default Footer;