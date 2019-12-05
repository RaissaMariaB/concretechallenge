import React from 'react'
import Logo from '../../../../components/Logo'
import Search from '../../../../components/Search'

import './style.css'

const Nav = props => {
    const {click, typing} = props
    return(
        <div className='container__nav'>
            <Logo 
            classGit='Github-Search2'
            classSearch='text-style2'
            />
            <Search
             typing= {typing}
             click= {click}
             />
        </div>
    )
}

export default Nav