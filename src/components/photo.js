import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledHeading = styled.h1 `
    margin-top: 10%;
    font-size: 5rem;
`

const StyledFig = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${props => props.theme.black};
    margin: 5%;
    
`
const StyledCap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
const StyledDate = styled.figcaption`
    margin-top: 5%;
    margin-right: 80%;
`

export default function Photo(props) {

    const {photo} = props
    
    return(
        <div >
        <StyledHeading>{photo.title}</StyledHeading>
    <StyledFig>
    <StyledDate >{photo.date}</StyledDate>
        <img src={photo.url} alt = {photo.title} />     
    <StyledCap>
        <figcaption class = 'credit'>Credit and copyright:{photo.copyright}</figcaption>
        <figcaption class = 'explanation'>{photo.explanation}</figcaption>
    </StyledCap>
    </StyledFig>
        </div>
    
    )
}