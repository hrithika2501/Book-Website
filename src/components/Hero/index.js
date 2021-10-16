import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn, HeroImg} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>We Love Literature</HeroH1>
                    <HeroP>Loren dolor sit amet, consectetur adipiscing, et dolore magna aliqua.</HeroP>
                    <HeroBtn>READ MORE</HeroBtn>
                </HeroItems>
                <HeroImg></HeroImg>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
