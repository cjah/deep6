import React, { Fragment, Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './bootstrap-overrides.css';
import './Dashboard.css';

const Movie = styled.div`
  width: 20% !important;
  padding: 10px;
  margin-right: .5rem;
  border-radius: 4px;
  border-style: solid;
  border-bottom: 2px !important;
  border-left: 2px !important;
  border-right: 2px !important;
  float: left;
  ${props => props.index === props.hoverStateIndex ? 'background: white; cursor: pointer;' : 'background: #c9c9c9; cursor: "";'}
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
          </Nav>
        </Navbar>
        <div
          id="dashboard"
        >
          <Movie onMouseEnter={() => this.handleInHover(0)} onMouseLeave={() => this.handleOutHover(0)} hoverStateIndex={this.state.hoverStateIndex} index={0}>
            <span className="title">{this.props.movies[0].Title + ' (' + this.props.movies[0].Year + ')'}</span>
            <img className="" src={this.props.movies[0].Poster} width="120" height="180"></img>
            {this.createButton(0)}
          </Movie>
          <Movie onMouseEnter={() => this.handleInHover(1)} onMouseLeave={() => this.handleOutHover(1)} hoverStateIndex={this.state.hoverStateIndex} index={1}>
            <span className="title">{this.props.movies[1].Title + ' (' + this.props.movies[1].Year + ')'}</span>
            <img className="" src={this.props.movies[1].Poster} width="120" height="180"></img>
            {this.createButton(1)}
          </Movie>
          <Movie onMouseEnter={() => this.handleInHover(2)} onMouseLeave={() => this.handleOutHover(2)} hoverStateIndex={this.state.hoverStateIndex} index={2}>
            <span className="title">{this.props.movies[2].Title + ' (' + this.props.movies[2].Year + ')'}</span>
            <img className="" src={this.props.movies[2].Poster} width="120" height="180"></img>
            {this.createButton(2)}
          </Movie>
          <Movie onMouseEnter={() => this.handleInHover(3)} onMouseLeave={() => this.handleOutHover(3)} hoverStateIndex={this.state.hoverStateIndex} index={3}>
            <span className="title">{this.props.movies[3].Title + ' (' + this.props.movies[3].Year + ')'}</span>
            <img className="" src={this.props.movies[3].Poster} width="120" height="180"></img>
            {this.createButton(3)}
          </Movie>
        </div>
      </div>
    )
  }
}
