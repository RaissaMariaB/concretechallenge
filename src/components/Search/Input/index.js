import React from 'react'




const Input = props => {
    const {classInput} = props
    return(
        <input className={classInput} type="text" placeholder='Digite o nome do usuário desejado' ></input>
    )     
}        

export default Input 