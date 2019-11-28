import React from 'react'
import Logo from '../../../../components/Logo'
import Search from '../../../../components/Search'

import './style.css'

const Nav = () => {
    return(
        <div className='container__nav'>
            <Logo 
            classGit='Github-Search2'
            classSearch='text-style2'
            />
            <Search />
        </div>
    )
}

export default Nav