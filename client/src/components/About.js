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

                <!-- Footer -->
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
			            <p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
		            </div>
	            </footer>

            </div>
        </div>

    );
  }

}

export default About;
