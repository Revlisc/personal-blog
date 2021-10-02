import React from 'react'
import './Create.css'

function Create() {
    return (
        <div className='create'>
            <form className='createForm'>
                <div className='createFormGroup'>
                    <label for='fileInput'> +</label>
                    <input type='file' id='fileInput' style={{display: 'none'}}/>
                    <input className='createInput' autoFocus={true} type='text' placeholder='Title'/>
                </div>
                <div className='createFormGroup'>
                    <textarea placeholder='Tell your story' type='text' className='createInput createText'></textarea>
                </div>
                <button className='submutBtn' type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Create
