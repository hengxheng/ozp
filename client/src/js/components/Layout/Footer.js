import React from "react";
import { NavLink } from "react-router-dom";
import ewayImage from "../../../img/verified-seal.png";
import headerLogo from "../../../img/logo.png";
import awardImage from "../../../img/award.png";

const Footer = (props) => {
    return (
        <footer id="site-footer" className="site-footer">
            <div className="big-site-inner">
            <div className="footer-top">
                <div className="footer-left">
                    <img src={ headerLogo } alt="OZparty"/>
                    <p>We help you organise<br/>hassle free <span>parties and events.</span></p>
                </div>
                <div className="footer-right">
                    <div className="footer-col">
                        <img src={ awardImage } alt="Award" />
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-heading">
                            Top Occasions
                        </div>
                        <div className="footer-col-list">
                            <ul>
                                <li><a href="#">Birthday Parties</a></li>
                                <li><a href="#">Bucks Parties</a></li>
                                <li><a href="#">Hens Parties</a></li>
                                <li><a href="#">Christmax Parties</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-heading">
                            Company
                        </div>
                        <div className="footer-col-list">
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">How does this work?</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="tel: 1800697278" className="footer-pho">1800 697 278</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-heading">
                            Learn More
                        </div>
                        <div className="footer-col-list">
                            <ul>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Supplier Sign-Up</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-heading">
                            The Juicy Stuff
                        </div>
                        <div className="footer-col-list">
                            <ul>
                                <li><a href="#">Calendar Events</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-heading">
                            Social
                        </div>
                        <div className="footer-social-list">
                            <ul>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-snapchat-ghost" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <img src={ ewayImage } alt="EWAY"/>
                </div>
                <div className="footer-right">
                    <p className="site-copy">&copy; 2009 OZPARTY PTY LTD. ALL RIGHTS RESERVED.&nbsp;&nbsp;|&nbsp;&nbsp;ABN 53138407128</p>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;