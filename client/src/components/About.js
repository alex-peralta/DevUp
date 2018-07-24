/*
* Static page loading About Us information
*/
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

import '../App.css';


class About extends Component {

  render() {
    return (
        <div className="main-container">

            <Navbar color="light" light expand="md">
                <NavbarBrand>DevUp</NavbarBrand>
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

	            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
		            <div className="content">
			            <h2>Nelly Ackerman</h2>
			            <p>My name is Nelly Ackerman. I'm coming from another professional background in health care, i've been a registared nurse for 15 years.
				            I obtained my Bachelor degree in nursing in 2003 and since then i'm working in the medical field.
				            For the first 10 years, i've worked in Emergency Room at the big Trauma Center hospital. In 2012 i've obtained my Master in nursing sience and moved on. For the 5 last years i've been working in surgical services post op care unit at Northside Hospital.
				            My future goal is to stay in Healthcare field, and work in nursing informatics.</p>
			            <ul className="actions stacked">
				            <li><a href="https://na995909.github.io/Basic-Portfolio/" target="_blank" className="button">Learn More</a></li>
			            </ul>
		            </div>
		            <div className="image">
			            <img src="images/spotlight01.jpg" alt="" />
		            </div>
	            </section>

	            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
		            <div className="content">
			            <h2>Denis Gayvoronsky</h2>
			            <p>My name is Denis Gayvoronsky. I have Bachelor degree in financing from Ukraine University. I moved to United states in 2007, since then i've been working as a maintanence engineer in hospital settings. Even though i'm coming from another background, i've always wanted to dedicate my professional life to computer technologies, since i find this field very facinating, very advanced, and for these reasons i've signed up for the coding course in GT bootcamp.</p>
			            <ul className="actions stacked">
				            <li><a href="https://deniskag.github.io/Basic-Portfolio/" target="_blank" className="button">Learn More</a></li>
			            </ul>
		            </div>
		            <div className="image">
			            <img src="images/spotlight02.jpg" alt="" />
		            </div>
	            </section>

	            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
		            <div className="content">
			            <h2>Pharetra etiam nulla</h2>
			            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
			            <ul className="actions stacked">
				            <li><a href="#" className="button">Learn More</a></li>
			            </ul>
		            </div>
		            <div className="image">
			            <img src="images/spotlight03.jpg" alt="" />
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
				            <li><a href="#" className="icon style2 fa-twitter"><span
					            className="label">Twitter</span></a></li>
				            <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a>
				            </li>
				            <li><a href="#" className="icon style2 fa-instagram"><span
					            className="label">Instagram</span></a></li>
				            <li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a>
				            </li>
				            <li><a href="#" className="icon style2 fa-envelope"><span className="label">Email</span></a>
				            </li>
			            </ul>
			            <p>&copy; Copyright 2018 DevUp</p>
		            </div>
	            </footer>

            </div>
        </div>

    );
  }

}

export default About;
