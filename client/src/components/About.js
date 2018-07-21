/*
* Static page loading About Us information
*/
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class About extends Component {

  render() {
    return (
        <div className="main-container">

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">DevUp</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/ProBono">ProBono Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Projects">Open Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/About/">About Us</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <div id="wrapper" className="divided">

                <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                    <div className="content">
                        <h2>Nelly Ackerman</h2>
                        <p className="major">A responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
                        <ul className="actions stacked">
                            <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src="images/banner.jpg" alt="" />
                    </div>
                </section>

                <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
                    <div className="content">
                        <h2>Denis Gayvoronsky</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
                        <ul className="actions stacked">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src="images/spotlight01.jpg" alt="" />
                    </div>
                </section>

                <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                    <div className="content">
                        <h2>Alexander Peralta</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
                        <ul className="actions stacked">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src="images/spotlight02.jpg" alt="" />
                    </div>
                </section>

                <section className="wrapper style1 align-center">
                    <div className="inner medium">
                        <h2>Get in touch</h2>
                        <form method="post" action="#">
                            <div className="fields">
                                <div className="field half">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value=""/>
                                </div>
                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value=""/>
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="6"></textarea>
                                </div>
                            </div>
                            <ul className="actions special">
                                <li><input type="submit" name="submit" id="submit" value="Send Message"/></li>
                            </ul>
                        </form>

                    </div>
                </section>

                <footer className="wrapper style1 align-center">
                    <div className="inner">
                        <ul className="icons">
                            <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="#" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
                        </ul>
                        <p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                    </div>
                </footer>

            </div>
        </div>

    );
  }

}

export default About;
