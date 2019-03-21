import React, { Fragment, Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './bootstrap-overrides.css';
import './Dashboard.css';
import MovieRental from './MovieRental.js'

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
      <Button onClick={() => this.handleReturnButton(movieIndex)} style={{ cursor: movieIndex === this.state.hoverStateIndex ? 'pointer' : 'none' }}>Return</Button>
    )
  }

  handleReturnButton(movieIndex) {
    console.log('handleReturnButton, movieIndex: ', movieIndex)
  }

  render() {

    return (
      <div id="dashboardRoot">
        <Navbar id="navbar" bg="dark" variant="dark">
          <Navbar.Brand>
            <img src={this.props.image.src} alt={this.props.image.alt} className="logo"/>
          </Navbar.Brand>
          <Nav className="tabs">
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>TV Shows</Nav.Link> 
          </Nav>
        </Navbar>
        <div
          id="dashboard"
        >

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
