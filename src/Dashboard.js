import React, { Fragment, Component } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import Helmet from 'react-helmet';
import moment from 'moment';
import MovieRental from './MovieRental.js'
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap-overrides.css';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStateIndex: null
    }
    this.handleInHover = this.handleInHover.bind(this);
    this.handleOutHover = this.handleOutHover.bind(this);
    this.handleReturnButton = this.handleReturnButton.bind(this);
    this.handleOverdue = this.handleOverdue.bind(this);
  }

  handleInHover(index) {
    this.setState({ hoverStateIndex: index })
  }

  handleOutHover(index) {
    if (index === this.state.hoverStateIndex) this.setState({ hoverStateIndex: null });
    else this.setState({ hoverStateIndex: index })
  }

  handleReturnButton(movieIndex) {
    console.log('handleReturnButton, movieIndex: ', movieIndex)
  }

  handleOverdue(utcString) {
    const sixDaysAgo = moment.unix(moment().subtract(6, 'days'));

    //the json objects all have empty strings for checkedOut so im just going to return false for this case
    if (utcString === '') return false;
    return sixDaysAgo < moment.unix(utcString) ? false : true;

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
              return <MovieRental overdue={this.handleOverdue(movie.checkedOut)} handleInHover={this.handleInHover} handleOutHover={this.handleOutHover} hoverStateIndex={this.state.hoverStateIndex} index={i} key={i} title={movie.Title} year={movie.Year} src={movie.Poster} handleReturnButton={this.handleReturnButton} />
            })
          }
        </div>
      </div>
    )
  }
}
