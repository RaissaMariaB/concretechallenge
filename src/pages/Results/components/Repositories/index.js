import React from 'react'
import IconText from '../IconsText'
import Description from '../Description'
import Star from '../../../../assets/star_icon.png'

import './style.css'

const Repositories = (props) => {
    const { repos } = props
    return (
        <div>            
                <div className='container_repos'>
                    <Description
                        user_name= 'Nome do repositório'
                        user_login= 'Descriçã do repositório'
                        description_title='repos_title'
                        description_p='repos_p'
                    ></Description>
                    <div  className='star'>
                    <IconText
                        icon={Star}
                        alt='organization icon'
                        classIcon='icon-repositories'
                    >1000</IconText>
                    </div>
                </div>            
        </div>
    )
}

export default Repositories