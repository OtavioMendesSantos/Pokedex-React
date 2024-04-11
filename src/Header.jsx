import React from 'react'
import './styles/Header.css'
import icon from './assets/pokedex_icon.svg'


const Header = ({children}) => {
  return (
    <header className='header'>
      <img src={icon} alt="Pokedex Icon" className='icon' />
      <h1>Pokédex</h1>
    </header>
  )
}

export default Header
