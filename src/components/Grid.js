import React, { useState } from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

const Grid = () => {
  const [user, setUser] = useState({})
  const [page, setPage] = useState(Number)

  let keys = Object.keys(user)
  return (
    <>
      <div className='grid'>
        <Nav setUser={setUser} user={user} page={page} setPage={setPage} />
        <div className='x x2'>
          <div className='x x6'>
            {Object.values(user).map(
              (e, i) =>
                e && (
                  <div key={i}>
                    {keys[i]}: {e}
                  </div>
                )
            )}
          </div>
        </div>
        <Main page={page} />
        <div className='x x4'></div>
        <div className='x x5'></div>
        <Footer />
      </div>
    </>
  )
}

export default Grid
