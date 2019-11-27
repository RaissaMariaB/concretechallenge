import  React from 'react'
import Search from '../../components/Search'
import Logo from '../../components/Logo'

import './style.css'


const Home = props => {
    return(
        <div>
            <div>
                <Logo/>
           </div>
           <div>
               <Search/>
           </div>       
        </div>        
    )
}
export default Home