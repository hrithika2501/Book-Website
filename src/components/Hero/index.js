import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn, HeroImg} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1></HeroH1>
                    <HeroP></HeroP>
                    <HeroBtn></HeroBtn>
                </HeroItems>
                <HeroImg></HeroImg>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
