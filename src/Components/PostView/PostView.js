import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import './PostView.css'

function PostView() {
    return (
        <div className='postview'>
            <div className='single'>
                <img className='singleImg' src='' alt='single image' />
                <h1 className='singleTitle'>
                    RANDOM TITLE TEXT
                    <div className='singleEditContainer'>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className='singleInfo'>
                    <span className='singleAuthor'>Author: Revlisc</span>
                    <span className='singleDate'>1 hour ago</span>
                </div>
                <p className='singleContent'>
                    RANDOM TEXT CONTENT
                </p>
            </div>
            <Sidebar />
        </div>
    )
}

export default PostView
