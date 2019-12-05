import React from 'react'
import './style.css'

const IconsText = props => {
    const {icon, alt, class_icon, children} = props
    return (
        <div className='container__icon'>
            <img src={icon} alt={alt} className={class_icon}></img>
            <p className='icon__text'>{children}</p>
        </div>
    )
}

export default IconsText 