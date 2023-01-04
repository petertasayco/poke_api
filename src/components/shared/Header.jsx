import React from 'react'
import "./styles/header.css"

const Header = () => {
  return (
    <header className='header'>
        
        <div className='header_red'>
            <img className='header_img' src="/images/home/pokedex.png" alt="" />
            <div className='header_black'></div>
            <div className='header_circle'>
                <div className='header_circle-int'></div>
            </div>
            
        </div>
    </header>
  )
}

export default Header