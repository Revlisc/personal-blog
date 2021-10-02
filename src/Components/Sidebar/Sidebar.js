import React from 'react'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span classname='sidebarTitle'>About Me</span>
                <img className='sidebarImg' src='' alt='profile img' />
                <p>lorem ipsum text

                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>Categories</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Science</li>
                    <li className='sidebarListItem'>Film</li>
                    <li className='sidebarListItem'>Tech</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span classname='sidebarTitle'>Follow Me</span>
                {
                //icons with links to socials
                }
            </div>
        </div>
    )
}

export default Sidebar
