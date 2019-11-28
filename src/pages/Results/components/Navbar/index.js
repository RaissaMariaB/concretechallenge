import React from 'react'
import Logo from '../../../../components/Logo'
import Search from '../../../../components/Search'

import './style.css'

const Nav = props => {
    const {classNav} = props
    return(
        <div className={classNav}>
            <Logo className='Github-Search2'/>
            <Search/>
        </div>
    )
}

export default Nav