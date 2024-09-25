import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='d-flex justify-content-around bg-secondary p-2'>
        <div >
        <h1 className='text-white'>E-COMMERCE SITE</h1></div>
        <div>
            <ul className='nav justify-content-end py-2'>
                <li className='nav-item'>
                    <Link to='' className="nav-link text-white">HOME</Link>
                </li>
                <li className='nav-item'>
                    <Link to='' className="nav-link text-white">Login</Link>
                </li>
                <li className='nav-item'>
                    <Link to='' className="nav-link text-white">Register</Link>
                </li>
                <li className='nav-item'>
                    <Link to='' className="nav-link text-white">Whishlist</Link>
                </li>
                <li className='nav-item'>
                    <Link to='' className="nav-link text-white">Help</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header