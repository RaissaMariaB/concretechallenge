import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'
import Profile from './components/Profile'
import Repositories from '../Results/components/Repositories'
import { getUser } from '../../services/api/users'
import NotFound from './NotFound'

import './style.css'

class Results extends Component{
    constructor(props){
    super(props)
    this.state= {
        value:'',
        error:''
    }
    }

    render(){
        console.log(this.props)
        return(
            <Fragment>
            <Nav classNav='classNav'/> 
            <div className= 'container_results'>
          
                <Profile avatar_url={this.props.location.state.user.avatar_url}
                user_name = {this.props.location.state.user.name}
                user_login = {this.props.location.state.user.login}
                /> 
                <Repositories/>
                            
            </div>
            </Fragment>
            
        )
    }
}       
           
export default Results