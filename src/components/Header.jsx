import React from 'react'
import  logoImg from '../assets/logo.jpg';
export default function Header() {
  return (
    <header id='main-header'>
        <div id='title'>

        </div>
        <img src={logoImg} alt=""  width={100}/>
        <h1>ReactFood</h1>
         <nav>
            <button>Cart (0)</button>
         </nav>
    </header>
    
    
  )
}
