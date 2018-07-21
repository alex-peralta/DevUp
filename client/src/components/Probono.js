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



class Probono extends Component {

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

		      <section className="wrapper style1 align-center">
			      <div className="inner">
				      <h2>Lend a hand, and gain experience...</h2>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
			      </div>

			      <div className="gallery style2 medium lightbox onscroll-fade-in">
				      <article>
					      <a href="images/gallery/fulls/01.jpg" className="image">
						      <img src="images/gallery/thumbs/01.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Ipsum Dolor</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/02.jpg" className="image">
						      <img src="images/gallery/thumbs/02.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Feugiat Lorem</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/03.jpg" className="image">
						      <img src="images/gallery/thumbs/03.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Magna Amet</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/04.jpg" className="image">
						      <img src="images/gallery/thumbs/04.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Sed Tempus</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/05.jpg" className="image">
						      <img src="images/gallery/thumbs/05.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Ultrices Magna</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/06.jpg" className="image">
						      <img src="images/gallery/thumbs/06.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Sed Tempus</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/07.jpg" className="image">
						      <img src="images/gallery/thumbs/07.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Ipsum Lorem</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/08.jpg" className="image">
						      <img src="images/gallery/thumbs/08.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Magna Risus</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/09.jpg" className="image">
						      <img src="images/gallery/thumbs/09.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Tempus Dolor</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/10.jpg" className="image">
						      <img src="images/gallery/thumbs/10.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Sed Etiam</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/11.jpg" className="image">
						      <img src="images/gallery/thumbs/11.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Magna Lorem</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
				      <article>
					      <a href="images/gallery/fulls/12.jpg" className="image">
						      <img src="images/gallery/thumbs/12.jpg" alt="" />
					      </a>
					      <div className="caption">
						      <h3>Ipsum Dolor</h3>
						      <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
						      <ul className="actions fixed">
							      <li><span className="button small">Details</span></li>
						      </ul>
					      </div>
				      </article>
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

export default Probono;
