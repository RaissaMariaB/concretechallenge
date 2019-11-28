import React from 'react'
import Lupa from '../../../assets/Search Icon.png'



const Button = props => {
    const {classButton} = props
    return(
    <button className={classButton} >
        <img src= {Lupa} alt="imagem de uma lupa" className="search-icon"/>
    </button>
    )
}
export default Button