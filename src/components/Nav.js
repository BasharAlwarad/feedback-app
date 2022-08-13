const Nav = ({ name, setName }) => {
  const onInput = e => {
    e.preventDefault()
    switch (e.target.name) {
      case 'fname':
        setName({ ...name, f: e.target.value })
        break
      case 'lname':
        setName({ ...name, l: e.target.value })
        break
      case 'email':
        setName({ ...name, email: e.target.value })
        break

      default:
        break
    }
  }

  return (
    <div className='x x1'>
      <form action='submit'>
        <label htmlFor='Name'>First Name</label>
        <input autoFocus name='fname' type='text' onInput={e => onInput(e)} />
        <label htmlFor='Name'>Last Name</label>
        <input name='lname' type='text' onInput={e => onInput(e)} />
        <label htmlFor='Name'>Email</label>
        <input name='email' type='email' onInput={e => onInput(e)} />
      </form>
      {name.f}
      {name.l}
      {name.email}
    </div>
  )
}

export default Nav

