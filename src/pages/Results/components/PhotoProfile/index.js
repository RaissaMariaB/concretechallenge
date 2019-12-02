import React from 'react';

const PhotoProfile = props => {
    const {avatar_url} = props
    return (
        <img src={avatar_url} className='photo_profile' alt='user github'></img>
    )
}

export default PhotoProfile
