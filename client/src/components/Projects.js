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

	constructor(props) {
    super(props);
    this.state = { activeIndex: 0, saved: [] };

  }

  componentDidMount() {
	  this.getSavedProjects()
  }

  getSavedProjects = () => {
    API.getProjects()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }

  renderProjects = () => {
    let { activeIndex } = this.state;

    let cards = this.state.saved.map((item) => {
      return (
      	<section>
		      <img src={item.picture} width="80%" className="center"/>
		      <h3><a href={item.link} target="_blank">{item.title}</a></h3>
		      <h4>{item.subtitle}</h4>
		      <p style={{'text-align':'left'}}><span className="icon fa-clock-o"></span> {item.duration}</p>
		      <p style={{'text-align':'left'}}><span className="icon fa-globe"></span> {item.location}</p>
		      <p style={{'text-align':'left'}}><span className="icon fa-user"></span> {item.note}</p>
	      </section>
      );
    });
    return(
        <div className="items style1 medium onscroll-fade-in">
                {cards}
        </div>
    );
  }

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
				      {this.renderProjects()}
			      
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
