import { useEffect, useRef, useContext } from 'react'
import { GridContext } from '../Context/GridContext'

const Nav = () => {
  const { user, setUser, page, setPage } = useContext(GridContext)
  const renderCount = useRef(1)
  
  const onInput = e =>
    setUser({ ...user, ...{ [e.target.name]: e.target.value } })

  const onClick = e => {
    if (e.target.getAttribute('class') === 'next') {
      setPage(pre => pre + 25)
      console.log(page)
    } else {
      if (page >= 25) {
        setPage(pre => pre - 25)
      } else {
        return null
      }
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(user)
  }

  useEffect(() => {
    return () => {
      renderCount.current = renderCount.current + 1
    }
  })

  return (
    <div className='x x1'>
      <div className='nav-buttons'>
        <div className='previous' onClick={e => onClick(e)}>
          Previous
        </div>
        <div className='next' onClick={e => onClick(e)}>
          Next
        </div>
        <div className='render'>{renderCount.current}</div>
      </div>

      <form action='submit' onSubmit={e => onSubmit(e)}>
        <label htmlFor='First Name'>First Name</label>
        <input
          autoFocus
          name='First Name'
          type='text'
          onInput={e => onInput(e)}
        />
        <label htmlFor='Last Name'>Last Name</label>
        <input name='Last Name' type='text' onInput={e => onInput(e)} />
        <label htmlFor='Email'>Email</label>
        <input name='Email' type='email' onInput={e => onInput(e)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Nav
