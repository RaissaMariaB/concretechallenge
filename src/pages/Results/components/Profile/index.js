import React from 'react'
import IconsText from '../IconsText'
import PhotoProfile from '../PhotoProfile'
import Description from '../Description'
import Star from '../../../../assets/star_icon.png'

import './style.css'

const Profile = props =>{
    console.log(props)
    return(
        <div className='container__profile'>
            <PhotoProfile
            avatar_url={props.avatar_url}
            />
            <Description
            description_title='user__name'
            description_P= 'user__login'
            user_name= {props.title}
            user_login={props.login}
            />
            <IconsText
            icon={Star}
            alt= 'star icon'
            class_icon='icon'
            children= 'lindx demaaaais'
            />
        </div>
    )
}

export default Profile

