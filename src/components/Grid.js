import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Main from './Main'
import Side from './Side'
import Footer from './Footer'
import { GridContext } from '../Context/GridContext'

export default function Grid() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState(null)

  return (
    <GridContext.Provider value={{ user, setUser, page, setPage }}>
      <div className='grid'>
        <Nav />
        <Side />
        <Main />
        <div className='x x4'></div>
        <div className='x x5'></div>
        <Footer />
      </div>
    </GridContext.Provider>
  )
}
