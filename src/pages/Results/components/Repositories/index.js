import React from 'react'
import IconsText from '../IconsText'
import Description from '../Description'
import Star from '../../../../assets/star_icon.png'

import './style.css'

const Repositories = props => {
    const {repoName, repoDescription, repoStargazersCount }  = props
    return (                   
             <div className='container_repos'>
                    <Description
                        user_name= {repoName}
                        user_login= {repoDescription}
                        description_title='repos_title'
                        description_p='repos_p'
                    ></Description>
                    <div  className='star'>
                    <IconsText
                        icon={Star}
                        alt='organization icon'
                        classIcon='icon-repositories'
                    >{repoStargazersCount}</IconsText>
                    </div>
            </div>          
    )
}

export default Repositories