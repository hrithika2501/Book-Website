import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn, HeroImg} from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
    
            <Navbar toggle={toggle}/>
            
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
