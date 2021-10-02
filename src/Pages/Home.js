import React from 'react'
import Posts from '../Components/Posts/Posts'
import Sidebar from '../Components/Sidebar/Sidebar'
import Title from '../Components/Title/Title'

import './Home.css'

function Home() {
    return (
        <>
            <Title />
            <div className='home'>
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
