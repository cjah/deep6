import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Movie = styled.div`
    width: 260px !important;
    height: 280px;
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
    position: relative;
    text-align: center;
`

const TitleAndPictureContainer = styled.div`
    width: 100%;
    height: 240px;
    padding: 0px;
    margin: 0px;
`

const MovieImage = styled.img`
    position: absolute;
    margin: 0 auto;
    width: 120px;
    height: 180px;
    bottom: 30px;
    left: 65px;
`

const Overdue = styled.div`
    ${props => props.overdue ?
        `position: absolute;
        height: 24px;
        width: 120px;
        right: -4px;
        top: 36px;
        background: red;
        text-align: center;
        color: white;
        font-size: 14px;
        font-family: 'Lato';
        line-height: 20px;
        vertical-align: middle;` :
        'display: none'
    }  
`

const MovieButton = styled.button`
    text-transform: uppercase;
    color: #fff;
    border-color: #ff4409;
    background-color: #ff5722;
    display: block;
    margin: 0 auto;
    width: 230px;
    font-size: 12px;
    line-height: normal;
    font-family: 'Lato', sans-serif;
    cursor: ${props => props.index === props.hoverStateIndex ? 'pointer' : 'none'};
`

const MovieRental = ({ handleInHover, handleOutHover, handleReturnButton, hoverStateIndex, index, title, year, src, overdue }) => {
    return (
        <Movie onMouseEnter={() => handleInHover(index)} onMouseLeave={() => handleOutHover(index)} index={index} hoverStateIndex={hoverStateIndex} handleReturnButton={handleReturnButton}>
            <Overdue overdue={overdue}>OVERDUE</Overdue>
            <TitleAndPictureContainer>
                <span>{title + ' (' + year + ')'}</span>
                <MovieImage src={src} />
            </TitleAndPictureContainer>
            <MovieButton onClick={() => handleReturnButton(hoverStateIndex)} index={index} hoverStateIndex={hoverStateIndex}>Return</MovieButton>
        </Movie>
    )
}

MovieRental.propTypes = {
    handleInHover: PropTypes.func.isRequired,
    handleOutHover: PropTypes.func.isRequired,
    handleReturnButton: PropTypes.func.isRequired,
    hoverStateIndex: PropTypes.number,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    overdue: PropTypes.bool.isRequired
}

export default MovieRental;