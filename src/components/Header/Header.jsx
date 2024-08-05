import React from 'react'
import '../Header/Header.css'
import Logo from '../../assest/Straight_Logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='Navbar'>
      <Link to={'/'}><img className='logo' src={Logo} alt='Logo' /></Link>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <li>Find Job</li>
        <li>Find Talent</li>
        <li>Post a Job</li>
        <li>Shortlist</li>
        <li>Community</li>
      </ul>
      <button className='Login-btn' ><Link className='Login-btn' to='/Login'>Login</Link>/<Link className='Login-btn' to={'/SignUp'}>Signup</Link></button>
    </div>
  )
}

export default Header
