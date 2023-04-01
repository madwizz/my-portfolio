import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <menu className='menu'>
        <p className='menu-item'>Home</p>
        <p className='menu-item'>About</p>
      </menu>
      <button className='contacts-button'>Get in touch</button>
    </header>
  )
}

export default Header