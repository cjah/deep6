import React, { Fragment, Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
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
      <Button onClick={() => this.handleReturnButton(movieIndex)} style={{ cursor: movieIndex === this.state.hoverStateIndex ? 'pointer' : '' }}>Return</Button>
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
            <Nav.Link>Test Link</Nav.Link>
          </Nav>
        </Navbar>
        <div
          id="dashboard"
        >
          <div id="movie" onMouseEnter={() => this.handleInHover(0)} onMouseLeave={() => this.handleOutHover(0)} style={{ backgroundColor: this.state.hoverStateIndex === 0 ? 'white' : '#c9c9c9', cursor: this.state.hoverStateIndex === 0 ? 'pointer' : ''}}>
            <span id="title">Title: {this.props.movies[0].Title} {this.createButton(0)}</span>
            <span id="year">Year: {this.props.movies[0].Year}</span>
            <img id="title" src={this.props.movies[0].Poster} width="120" height="180"></img>
          </div>
          <div id="movie" onMouseEnter={() => this.handleInHover(1)} onMouseLeave={() => this.handleOutHover(1)} style={{ backgroundColor: this.state.hoverStateIndex === 1 ? 'white' : '#c9c9c9', cursor: this.state.hoverStateIndex === 1 ? 'pointer' : '' }}>
            <span id="title">Title: {this.props.movies[1].Title} {this.createButton(1)}</span>
            <span id="year">Year: {this.props.movies[1].Year}</span>
            <img id="title" src={this.props.movies[1].Poster} width="120" height="180"></img>
          </div>
          <div id="movie" onMouseEnter={() => this.handleInHover(2)} onMouseLeave={() => this.handleOutHover(2)} style={{ backgroundColor: this.state.hoverStateIndex === 2 ? 'white' : '#c9c9c9', cursor: this.state.hoverStateIndex === 2 ? 'pointer' : '' }}>
            <span id="title">Title: {this.props.movies[2].Title} {this.createButton(2)}</span>
            <span id="year">Year: {this.props.movies[2].Year}</span>
            <img id="title" src={this.props.movies[2].Poster} width="120" height="180"></img>
          </div>
          <div id="movie" onMouseEnter={() => this.handleInHover(3)} onMouseLeave={() => this.handleOutHover(3)} style={{ backgroundColor: this.state.hoverStateIndex === 3 ? 'white' : '#c9c9c9', cursor: this.state.hoverStateIndex === 3 ? 'pointer' : '' }}>
            <span id="title">Title: {this.props.movies[3].Title} {this.createButton(3)}</span>
            <span id="year">Year: {this.props.movies[3].Year}</span>
            <img id="title" src={this.props.movies[3].Poster} width="120" height="180"></img>
          </div>
        </div>
      </div>
    )
  }
}
