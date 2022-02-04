import React from 'react'
import { Container, Content, ImageWrapper, Image} from './styles';

const NonFiction = ({data}) => {
    
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

export default NonFiction