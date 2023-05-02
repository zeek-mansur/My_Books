import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './Nav.css'

export default function Nav() {
  return (
    <div>
      <nav>    
        <ul >
           <li className='logo'>My Books</li>
            <li> <Link to = '/'> Home</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/SavedBooks'>Saved</Link></li>
        </ul>
      </nav>
    </div>
  )
}
