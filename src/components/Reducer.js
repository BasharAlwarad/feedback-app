import React, { useReducer } from 'react'

const ACTIONS = {
  INC: 'inc',
  DEC: 'dec',
}
const { INC, DEC } = ACTIONS

function reducer(state, action) {
  switch (action.type) {
    case INC:
      return { count: state.count + 1, n: state.n * 2 }

    case DEC:
      return { count: state.count - 1, n: state.n / 2 }

    default:
      return state
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, n: 1 })

  const onClick = e => dispatch({ type: e.target.name })

  return (
    <div className='x x5'>
      <button name={INC} onClick={e => onClick(e)}>
        +
      </button>
      <span> {state.count} </span> <span>{state.n} </span>
      <button name={DEC} onClick={e => onClick(e)}>
        -
      </button>
    </div>
  )
}

export default Reducer
