import React, { Fragment, Component } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Helmet from 'react-helmet';

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
  font-family: 'Lato', sans-serif;
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

    return (
      <div id="dashboardRoot">
        <Helmet>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
        </Helmet>

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
