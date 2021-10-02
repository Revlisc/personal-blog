import React from 'react'

import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='topLeft'>L</div>
            <div className='topCenter'>
                <ul className='headerList'>
                    <li className='headerListItem'>Home</li>
                    <li className='headerListItem'>About</li>
                    <li className='headerListItem'>Contact</li>
                    <li className='headerListItem'>Write</li>
                    <li className='headerListItem'>Logout</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='headerImg' src='' alt='profile picture'/> 
            </div>
        </div>
    )
}

export default Header
