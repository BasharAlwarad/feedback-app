import React, { useState } from 'react'
import Nav from './Nav'
import Main from './Main'

const Grid = () => {
  const [name, setName] = useState({ f: '', l: '', email: '' })
  let keys = Object.keys(name)
  return (
    <>
      <div className='grid'>
        <Nav setName={setName} name={name} />
        <div className='x x2'>
          <div className='x x6'>
            {Object.values(name).map(
              (e, i) =>
                e && (
                  <div key={i}>
                    {keys[i]}: {e}
                  </div>
                )
            )}
          </div>
        </div>
        <Main />
        <div className='x x4'></div>
        <div className='x x5'></div>
        <div className='x x7'></div>
      </div>
    </>
  )
}

export default Grid
