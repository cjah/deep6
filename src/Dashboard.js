import React, { Fragment, Component } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap-overrides.css';
import './Dashboard.css';



import MovieRental from './MovieRental.js'

const MovieButton = styled.button`
  text-transform: uppercase;
  color: #fff;
  border-color: #ff4409;
  background-color: #ff5722;
  display: block;
  margin: 0 auto;
  width: 230px;
  font-size: none;
  line-height: normal;
`

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStateIndex: null
    }
    this.handleInHover = this.handleInHover.bind(this);
    this.handleOutHover = this.handleOutHover.bind(this);
    this.createButton = this.createButton.bind(this);
    this.handleReturnButton = this.handleReturnButton.bind(this);
  }

  handleInHover(index) {
    this.setState({ hoverStateIndex: index })
  }

  handleOutHover(index) {
    if (index === this.state.hoverStateIndex) this.setState({ hoverStateIndex: null });
    else this.setState({ hoverStateIndex: index })
  }

  createButton(movieIndex) {
    return (
      <MovieButton onClick={() => this.handleReturnMovieButton(movieIndex)} style={{ cursor: movieIndex === this.state.hoverStateIndex ? 'pointer' : 'none' }}>Return</MovieButton>
    )
  }

  handleReturnButton(movieIndex) {
    console.log('handleReturnButton, movieIndex: ', movieIndex)
  }

  render() {
  //   <Navbar id="navbar" collapseOnSelect expand='sm' bg="dark" variant="dark">
  //   <Navbar.Brand>
  //     <img src={this.props.image.src} alt={this.props.image.alt} className="logo"/>
  //   </Navbar.Brand>
  //   <Navbar.Collapse id="responsive-navbar-nav">
  //     <Nav className="tabs">
  //       <Nav.Link>Movies</Nav.Link>
  //       <Nav.Link>TV Shows</Nav.Link> 
  //     </Nav>
  //   </Navbar.Collapse>

  // </Navbar>

/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */


    return (
      <div id="dashboardRoot">

        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand>
            <img src={this.props.image.src} alt={this.props.image.alt} className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Movies</Nav.Link>
              <Nav.Link>TV Shows</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        

        <div id="dashboard">

          {
            this.props.movies.map((movie, i) => {
              return <MovieRental handleInHover={this.handleInHover} handleOutHover={this.handleOutHover} hoverStateIndex={this.state.hoverStateIndex} index={i} key={i} title={movie.Title} year={movie.Year} src={movie.Poster} createButton={this.createButton} />
            })
          }

        </div>
      </div>
    )
  }
}
