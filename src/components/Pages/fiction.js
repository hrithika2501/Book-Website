import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Content = styled.div `
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

const ImageWrapper = styled.div`
width: 200px;
height: 300px;
`;

const Image = styled.img`
display: block;
padding: 0;
align-self: start;
max-width: 100%;
max-height: 100%;
object-fit: cover;
object-position: center;
`;

const Fiction = ({data}) => {
    
    return (
        <Container>
        <Content>
            {data.map((product, index) => {
                return(
            <ImageWrapper key={index}>
                <Image src={product.img} alt={product.alt}/>
            </ImageWrapper>
                )
            })}
        </Content>
        </Container>
    )
}

export default Fiction
