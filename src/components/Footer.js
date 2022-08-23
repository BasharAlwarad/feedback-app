import { useState, useMemo } from 'react'
import React from 'react'

const Footer = () => {
  const [number, setNumber] = useState(null)
  const [dark, setDark] = useState(true)

  const background = useMemo(() => {
    return {
      background: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark])

  const button = {
    background: !dark ? 'black' : 'white',
    color: !dark ? 'white' : 'black',
  }

  return (
    <div className='x x7' style={background}>
      {'    '}
      <b> {number} </b>
      {'    '}
      <input
        type='number'
        name='number'
        onChange={e => setNumber(e.target.value)}
      />
      <button
        className='footer-button'
        style={button}
        onClick={() => setDark(pre => !pre)}
      >
        Change Theme
      </button>
    </div>
  )
}

export default Footer
