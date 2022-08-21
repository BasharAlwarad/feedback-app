import { useState } from 'react'
import React from 'react'

const Footer = () => {
  const [number, setNumber] = useState()
  const [dark, setDark] = useState(true)
  const background = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }
  const button = {
    background: !dark ? 'black' : 'white',
    color: !dark ? 'white' : 'black',
  }

  const onClick = () => {
    setDark(pre => !pre)
  }
  const onChange = e => {
    setNumber(e.target.value)
  }

  return (
    <div className='x x7' style={background}>
      <span> {number} </span>
      <input type='number' name='number' onChange={e => onChange(e)} />
      <button className='footer-button' style={button} onClick={onClick}>
        Change Theme
      </button>
    </div>
  )
}

export default Footer
