import React from 'react'

import './Post.css'

function Post() {
    return (
        <div classname='post'>
            <img className='postImg' src='' alt="post image" />
            <div className='postInfo'>
                <div className='postCategories'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>TEXT</span>
                <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postContent'>
                DESC HERE FOR POST
            </p>
        </div>
    )
}

export default Post
