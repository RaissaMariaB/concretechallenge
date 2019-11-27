import  React, {Fragment} from 'react'
import Lupa from '../../assets/Search Icon.png'

import './style.css'

const Search = props =>  {    
    return(
        <Fragment>
        <input className='Search-Input' type='text' placeholder='Digite o nome do usuário desejado' ></input>
        <button className="button" >
            <img src= {Lupa} alt="imagem de uma lupa" className="search-icon"/>
        </button>
        </Fragment>
    )
}    

export default Search