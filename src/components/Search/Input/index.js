import React from 'react'




const Input = props => {
    const {classInput, typing} = props
    return(
        <input className={classInput} type="text" placeholder='Digite o nome do usuário desejado' onChange={typing} ></input>
    )     
}        

export default Input 