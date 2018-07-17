import React, { Component } from "react";
import API from "../utils/api";
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



class UpdateProjects extends Component {

  update = () => {
    return API.update().data;
  }

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
        <div>{this.update()}</div>
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
      </div>

    );
  }

}

export default UpdateProjects;
