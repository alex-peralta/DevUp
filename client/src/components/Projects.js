/*
* This page will hold projects data
*/
import React, { Component } from "react";
import API from "../utils/api";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';



class Projects extends Component {

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

	      <section className="wrapper style1 align-center">
		      <div className="inner">
			      <h2>Ipsum sed consequat</h2>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit
				      amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
				      pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
			      <div className="items style1 medium onscroll-fade-in">
				      <section>
					      <span className="icon style2 major fa-diamond"></span>
					      <h3>Lorem</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-save"></span>
					      <h3>Ipsum</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-bar-chart"></span>
					      <h3>Dolor</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-wifi"></span>
					      <h3>Amet</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-cog"></span>
					      <h3>Magna</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-paper-plane"></span>
					      <h3>Tempus</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-desktop"></span>
					      <h3>Aliquam</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-refresh"></span>
					      <h3>Elit</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-hashtag"></span>
					      <h3>Morbi</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-bolt"></span>
					      <h3>Turpis</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-envelope"></span>
					      <h3>Ultrices</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
				      <section>
					      <span className="icon style2 major fa-leaf"></span>
					      <h3>Risus</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci
						      amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
				      </section>
			      </div>
		      </div>
	      </section>

	      <footer className="wrapper style1 align-center">
		      <div className="inner">
			      <ul className="icons">
				      <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
				      <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a>
				      </li>
				      <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a>
				      </li>
				      <li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a>
				      </li>
				      <li><a href="#" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
			      </ul>
			      <p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
		      </div>
	      </footer>
      </div>

    );
  }

}

export default Projects;
