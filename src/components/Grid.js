import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Main from './Main'
import Side from './Side'
import Footer from './Footer'
import Reducer from './Reducer'
import Todo from './Todo'
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
        <Todo/>
        <Reducer />
        <Footer />
      </div>
    </GridContext.Provider>
  )
}
