import  React from 'react'
import Lupa from '../../assets/Search Icon.svg'
import Button from './Button'
import Input from './Input'

import './style.css'

const Search = props =>  {    
    return(
        <div className= 'container__search'> 
            <Input classInput='Search-Input' 
            type='text' 
            placeholder='Digite o nome do usuário desejado'             
            ></Input>
            <Button classButton="button">
                <img src= {Lupa} alt="imagem de uma lupa" className="search-icon"/>
            </Button>
        </div>       
    )
}    

export default Search