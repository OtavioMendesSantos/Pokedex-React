import React from 'react'
import './styles/Button.css'

const Button = ({text,callback}) => {
  return (
    <button className='buttonLoad' onClick={callback}>
      {text}
    </button>
  )
}

export default Button
