import  React from 'react'
import Lupa from '../../assets/Search Icon.svg'
import Button from './Button'
import Input from './Input'

import './style.css'

const Search = props =>  {  
    const {typing, click} = props  
    return(        
        <div className= 'container__search'> 
            <Input classInput='Search-Input' typing={typing} ></Input>
            <Button classButton="button" click={click}>
                <img src= {Lupa} alt="imagem de uma lupa" className="search-icon"   />
            </Button>
        </div>       
    )
}    
export default Search