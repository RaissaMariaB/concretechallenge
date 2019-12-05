import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'
import Profile from './components/Profile'
import Repositories from '../Results/components/Repositories'
import { getUser } from '../../services/api/users'
import { getRepos } from '../../services/api/users'
import NotFound from './NotFound'

import './style.css'
import { thisExpression } from '@babel/types'
import IconsText from './components/IconsText/index.js'

class Results extends Component{
    constructor(props){
    super(props)
    this.state= {
        value:'',
        error:'',
        repos:[],
        user: {}
    }
    }

    componentDidMount(){
        this.searchRepos(this.props.location.state.user.login);
        this.setState({
            user: this.props.location.state.user
        })

    }

    searchUser = (valor) => {
        getUser(valor)
        .then(response => {
          this.setState({
            user: response.data
          })   
         } )}
    

    searchRepos = (name) => {
        getRepos(name).then(response => {
            this.setState({
                repos: response.data
            })
        })
    }

    inputValue = e => {
        this.setState({
          value: e.target.value
        })
         console.log(this.state.value);
        
      }

    searching = e =>{
        this.searchUser(this.state.value);
        this.searchRepos(this.state.value);
    }  
    render(){
        
        const {avatar_url, name, login, company, location, public_repos, followers, following} = this.state.user
        return(
            <Fragment>
            <Nav classNav='classNav'
            typing={this.inputValue}
            click={this.searching}
            />
                 
            <div className= 'container_results'>          
                <Profile avatar_url={avatar_url}
                user_name= {name}
                user_login= {login}
                textOrganization={company}
                textLocation={location}
                textStar={followers}
                textRepositories={public_repos}
                textFollowers={following}
                /> 
                <div>
                    {this.state.repos.map(repo =>                     
                        <Fragment  key= {repo.id}>
                        <Repositories
                         repoName= {repo.name}
                         repoDescription={repo.description}                
                        />                 
                        <IconsText classIcon ='icon__repositories' >
                         {repo.stargazers_count}
                        </IconsText>
                        </Fragment>                  
                      )}
                </div>
                                            
            </div>
            </Fragment>           
        )
    }
}       
           
export default Results