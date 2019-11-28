import  React from 'react'
import Search from '../../components/Search'
import Logo from '../../components/Logo'

import './style.css'


const Home = props => {
    return(
        <div className= 'container__home'>
            <div>
                <Logo classGit='Github-Search' classSearch='text-style-1'/>
           </div>
           <div>
               <Search classSearch='text-style-1'/>
           </div>       
        </div>       
    )
}
export default Home