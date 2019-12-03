import React from 'react'
import IconsText from '../IconsText'
import PhotoProfile from '../PhotoProfile'
import Description from '../Description'
import Star from '../../../../assets/star_icon.png'

import './style.css'

const Profile = props =>{
    const {avatar_url, user_name, user_login, text} = props
    return(
        <div className='container__profile'>
            <PhotoProfile
            avatar_url={avatar_url}
            />
            <Description
            description_title='user__name'
            description_P= 'user__login'
            user_name= {user_name}
            user_login={user_login}
            />
            <IconsText
            icon={Star}
            alt= 'star icon'
            class_icon='icon'
            children= {text}
            />
        </div>
    )
}

export default Profile

