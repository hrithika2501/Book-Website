import React,{useState} from 'react'
import { Nav, NavMenu, NavBtn, NavLinkWrapper} from './ProdElements';
import Fiction from '../Pages/fiction';
import {productData} from '../Pages/data';


const Products = () => {
    const[active, setActive] = useState("First");
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLinkWrapper><NavBtn onClick={()=>setActive("First")}>FICTION</NavBtn></NavLinkWrapper>
                    <NavLinkWrapper><NavBtn onClick={()=>setActive("Second")}>NON-FICTION</NavBtn></NavLinkWrapper>
                    <NavLinkWrapper><NavBtn onClick={()=>setActive("Third")}>HISTORY</NavBtn></NavLinkWrapper>
                    <NavLinkWrapper><NavBtn onClick={()=>setActive("Fourth")}>SCIENCE</NavBtn></NavLinkWrapper>
                    
                    
                </NavMenu>
            </Nav>
            <div>
                {active === "First" && <Fiction data={productData}/>}
                {/* {active === "Second" && <Blender/>}
                {active === "Third" && <Illustrations/>}
                {active === "Fourth" && <Photographs data={productData}/>} */}
                
            </div>
       
       </>
    )
    
}


export default Products



