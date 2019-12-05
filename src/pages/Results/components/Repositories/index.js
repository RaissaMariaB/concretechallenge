import React from 'react'
import IconText from '../IconsText'
import Description from '../Description'
import Star from '../../../../assets/star_icon.png'

import './style.css'

const Repositories = props => {
    const {repoName, repoDescription, children }  = props
    return (
        <div>            
                <div className='container_repos'>
                    <Description
                        user_name= {repoName}
                        user_login= {repoDescription}
                        description_title='repos_title'
                        description_p='repos_p'
                    ></Description>
                    <div  className='star'>
                    <IconText
                        icon={Star}
                        alt='organization icon'
                        classIcon='icon-repositories'
                    >{children}</IconText>
                    </div>
                </div>            
        </div>
    )
}

export default Repositories