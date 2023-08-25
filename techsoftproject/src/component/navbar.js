import React from 'react'
import img from "./images.png"
export default function Navbar(){
    return(
        <header class="header1">
        <a href="#" class="logo"><img src={img} width="50%" height="50%"/></a>
        <nav class="navbar1">
            <a href="#home">HOME</a>
            <a href="#about Us">ABOUT US</a>
            <a href="#News">NEWS</a>
            <a href="#products">PRODUCTS</a>
            <a href="#Client">CLIENT</a>
            <a href="#home">TECHNOLOGY</a>
            <a href="#about Us">SERVICES</a>
            <a href="#News">CAREES</a>
            <a href="#products">CONTACTUS</a>
            <a href="#Client">BLOGS</a>

            



        </nav>
    </header>
    )
}