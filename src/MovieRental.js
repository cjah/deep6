import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const MovieRental = ({ handleInHover, handleOutHover, createButton, hoverStateIndex, index, title, year, src }) => {

    return (
        <Movie onMouseEnter={() => handleInHover(index)} onMouseLeave={() => handleOutHover(index)} index={index} hoverStateIndex={hoverStateIndex}>
            <span className="title">{title + ' (' + year + ')'}</span>
            <img className="" src={src} width="120" height="180"></img>
            {createButton(index)}
        </Movie>
    )
}

MovieRental.propTypes = {
    handleInHover: PropTypes.func.isRequired,
    handleOutHover: PropTypes.func.isRequired,
    createButton: PropTypes.func.isRequired,
    hoverStateIndex: PropTypes.number,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default MovieRental;