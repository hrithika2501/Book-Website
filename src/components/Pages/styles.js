import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
`;

export const Content = styled.div `
margin-top:4em;
width: 85%;
height: 100%;
display: grid;
grid-template-columns: 250px 250px 250px 250px;
/* grid-template-rows: 1fr 1fr; */
grid-gap: 3em;
justify-items: center;
align-items: center;
/* padding-left:4em; */
/* padding-top: 1em; */
`;

export const ImageWrapper = styled.div`
width: 200px;
height: 300px;
`;

export const Image = styled.img`
display: block;
padding: 0;
align-self: start;
max-width: 100%;
max-height: 100%;
object-fit: cover;
object-position: center;
`;