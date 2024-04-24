import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <div>
            <a href='/'><h2>Who You Dating?</h2></a>
            
            </div>
            <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <a href="/form">Upload details</a>
                <a href="/verify">Verify</a>
                <span className='secondaryText'>TkBuild</span>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon"onClick={()=>setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
        
    </section>
  )
}

export default Header