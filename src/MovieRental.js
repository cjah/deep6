import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Movie = styled.div`
  width: 260px !important;
  height: 270px;
  padding: 10px;
  margin-right: 40px;
  margin-bottom: 40px;
  border-radius: 4px;
  float: left;
  ${props => props.index === props.hoverStateIndex ? 'background: white; cursor: pointer;' : 'background: #c9c9c9; cursor: none;'}
  border: 1px solid #c9c9c9;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`

const TitleAndPictureContainer = styled.div`
    width: 100%;
    height: 230px;
    padding: 0px;
    margin: 0px;
`

const MovieImage = styled.img`
    width: 120px;
    height: 180px;
    margin-top: 5px;
`

const MovieRental = ({ handleInHover, handleOutHover, createButton, hoverStateIndex, index, title, year, src }) => {

    return (
        <Movie onMouseEnter={() => handleInHover(index)} onMouseLeave={() => handleOutHover(index)} index={index} hoverStateIndex={hoverStateIndex}>
            <TitleAndPictureContainer>
                <span className="title">{title + ' (' + year + ')'}</span>
                <MovieImage src={src} />
            </TitleAndPictureContainer>
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