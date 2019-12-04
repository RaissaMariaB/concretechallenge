import React from 'react'
import IconsText from '../IconsText'
import PhotoProfile from '../PhotoProfile'
import Description from '../Description'
import Star from '../../../../assets/star_icon.png'
import Organization from '../../../../assets/organization_icon.png'
import Location from '../../../../assets/location_icon.png'
import Repositories from '../../../../assets/repositorie_icon.png'
import Followers from '../../../../assets/followers_icon.png'


import './style.css'

const Profile = props =>{
    const {avatar_url, user_name, user_login, textOrganization, textLocation, textStar, textRepositories, textFollowers } = props
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
            icon={Organization}
            alt= 'organization icon'
            class_icon='icon'
            children= {textOrganization}
            />
            <IconsText
            icon={Location}
            alt= 'location icon'
            class_icon='icon'
            children= {textLocation}
            />
            <IconsText
            icon={Star}
            alt= 'star icon'
            class_icon='icon'
            children= {textStar}
            />
            <IconsText
            icon={Repositories}
            alt= 'repositories icon'
            class_icon='icon'
            children= {textRepositories}
            />
            <IconsText
            icon={Followers}
            alt= 'followers icon'
            class_icon='icon'
            children= {textFollowers}
            />
            
        </div>
    )
}

export default Profile

