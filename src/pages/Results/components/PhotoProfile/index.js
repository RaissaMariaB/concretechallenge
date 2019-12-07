import React from 'react';

import './style.css'

const PhotoProfile = props => {
    const {avatar_url} = props
    console.log(props)
    return (
        <img src={avatar_url} className='photo_profile' alt='user github'></img>
    )
}

export default PhotoProfile
