import React,{useState} from 'react'
import { Nav, NavMenu, NavBtn, NavLinkWrapper} from './ProdElements';
import Fiction from '../Pages/fiction';
import NonFiction from '../Pages/non-fiction';
import History from '../Pages/history';
import Science from '../Pages/science';
import {productData} from '../Pages/data';
import {product1Data} from '../Pages/data1';
import {product2Data} from '../Pages/data2';
import {product3Data} from '../Pages/data3';


const Products = () => {
    const[active, setActive] = useState("");
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
                {active === "Second" && <NonFiction data={product1Data}/>} 
                {active === "Third" && <History data={product2Data}/>} 
                {active === "Fourth" && <Science data={product3Data}/>} 
               
                
            </div>
       
       </>
    )
    
}


export default Products



