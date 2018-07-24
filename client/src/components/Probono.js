import React, { Component } from "react";
import API from "../utils/api";
import { Carousel } from 'react-responsive-carousel';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

import '../App.css';

class Probono extends Component {

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

    let slides = this.state.saved.map((item) => {
      return (
        <div>
          
          <img src={item.picture} className="center col-md-4"/>
          <a href={item.link} target="_blank">
          <p className="legend" style={{'font-size':'20px'},{'background-color':'#746f6f'}}>{item.title} </p>
          </a>
        </div>
      );
    });
    return(
        <div className="justify-content-center col-md-12">
          <Carousel showThumbs={false} infiniteLoop emulateTouch useKeyboardArrows>
                {slides}
          </Carousel>
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

        
	      <div id="wrapper" className="divided">

		      <section className="wrapper style1 align-center">
			      <div className="inner">
				      <h2>Lend a hand, and gain experience...</h2>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
			      </div>
			      {this.renderProjects()}

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
				      <p>&copy; Copyright 2018 DevUp</p>
			      </div>
		      </footer>
	      </div>
      </div>
    );
  }

}

export default Probono;
