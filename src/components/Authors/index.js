import React from 'react'
import {AuthorsContainer, AuthWrapper, AuthHeading, AuthPara, AuthCard, AuthImg, AuthTitle, Head } from './AuthElements';

    const Authors = ({data}) => {
        return (
            <AuthorsContainer>
                <Head>
                <AuthHeading>Authors Of The Month</AuthHeading>
                <AuthPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </AuthPara>
                </Head>
                <AuthWrapper>
                    {data.map((product, index) => {
                        return (
                            <AuthCard key={index}>
                                <AuthImg src={product.img} alt={product.alt} />
                                
                                    <AuthTitle>{product.name}</AuthTitle>
                                    
                                </AuthCard>
                        )
                    })}
                </AuthWrapper>
            </AuthorsContainer>
                
            
        )
    }

    export default Authors
