import React from 'react'
import pikachu from './assets/loading_pikachu.gif'
import './styles/Loading.css'

const Loading = () => {
  return (
    <img src={pikachu} alt="Loading" className='loadingPikachu' />
  )
}

export default Loading
