import React, {Fragment} from 'react'
import IconsText from './components/IconsText'
import PhotoProfile from '../PhotoProfile'
import Description from '../Description'
import {Star} from '../../../../assets/star icon.png'

const Profile = props =>{
    return(
        <Fragment>
            <PhotoProfile/>
            <Description
            />
            <IconsText
            img={Star}
            alt= 'star icon'
            className='icon'
            children= 'lindx demaaaais'
            />

        </Fragment>

    )

}

export default Profile

