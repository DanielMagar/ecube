import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='movie-header-wrapper'>
            <Link to="/" className="text-xl font-bold">
          🎬 E-Cube
        </Link>
    </div>
  )
}

export default Header