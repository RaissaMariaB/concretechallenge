import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'
import Profile from './components/Profile'
import Repositories from '../Results/components/Repositories'
import { getUser } from '../../services/api/users'
import { getRepos } from '../../services/api/users'
import NotFound from './NotFound'

import './style.css'
import { thisExpression } from '@babel/types'

class Results extends Component{
    constructor(props){
    super(props)
    this.state= {
        value:'',
        error:'',
        repos:[]
    }
    }

    componentDidMount(){
        getRepos('RaissaMariaB').then(response => {
            this.setState({
                repos: response.data
            })
        }
            
        )
    }


    render(){
        
        const {avatar_url, name, login, company, location, public_repos, followers, following} = this.props.location.state.user
        return(
            <Fragment>
            <Nav classNav='classNav'/> 
            <div className= 'container_results'>          
                <Profile avatar_url={avatar_url}
                user_name= {name}
                user_login= {login}
                textOrganization={company}
                textLocation={location}
                textStar={public_repos}
                textRepositories={followers}
                textFollowers={following}
                /> 
                <div>
                    {this.state.repos.map(repo => (
                    <Repositories
                        
                   />  

                ))}
                 </div>
                                            
            </div>
            </Fragment>           
        )
    }
}       
           
export default Results