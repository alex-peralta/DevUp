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
  NavLink,
} from 'reactstrap';

import '../App.css';


class Projects extends Component {

	constructor(props) {
    super(props);
    this.state = { activeIndex: 0, saved: [],
    values: [
        { name: 'All Projects', id: 'All Projects' },
        { name: 'CRM', id: 'CRM' },
        { name: 'Website design', id: 'Website design' },
        { name: 'Mobile development', id:'Mobile development' },
        { name: 'Website development', id: 'Website development' }
      ],
      value:  'All Projects' 

    };

  }

  componentDidMount() {
	  this.getSavedProjects()
  }

  handleChange = (event) => {
  	this.setState({ value: event.target.value});
  	if('All Projects' === event.target.value){
  		API.getProjects()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  	} else{
  	API.getProjectsBy(event.target.value)
  	 .then((res) => {
        this.setState({ saved: res.data});
      });
  	}
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
		      <p style={{'textAlign':'left'}}><span className="icon fa-clock-o"></span> {item.duration}</p>
		      <p style={{'textAlign':'left'}}><span className="icon fa-globe"></span> {item.location}</p>
		      <p style={{'textAlign':'left'}}><span className="icon fa-user"></span> {item.note}</p>
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
  	
  	let optionTemplate = this.state.values.map(v => (
      <option style={{'fontWeight':'bold'}} value={v.id}>{v.name}</option>
    ));

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
        <label style={{'fontSize':'18px','fontWeight':'bold'}}>
	        Select Project Category:
	        <select style={{'fontWeight':'bold'}} value={this.state.value} onChange={this.handleChange}>
	          {optionTemplate}
	        </select>
	      </label>
	      <section className="wrapper style1 align-center">
		      <div className="inner">

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
			      <p>&copy; Copyright 2018 DevUp</p>
		      </div>
	      </footer>
      </div>

    );
  }

}

export default Projects;
