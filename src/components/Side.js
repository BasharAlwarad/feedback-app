import React, { useContext, useEffect } from 'react'
import {GridContext} from '../Context/GridContext'

export default function Side() {
  // console.log(GridContext);
  const {user} = useContext(GridContext)

  return (
    <div className='x x2'>
      {user && (
        <div className='x x6'>
          {Object.values(user).map(
            (e, i) =>
              e && (
                <div key={i}>
                  {Object.keys(user)[i]}: {e}
                </div>
              )
          )}
        </div>
      )}
    </div>
  )
}
