import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'
import Profile from './components/Profile'
import Repositories from '../Results/components/Repositories'
import { getUser, getRepos} from '../../services/api/users'
import NotFound from './NotFound'

import './style.css'

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
       if(this.props.location.state){
            if(this.props.location.state.user)  {
                this.searchRepos(this.props.location.state.user.login)
                this.setState({
                    user: this.props.location.state.user ,
                    error: ''  
                })

            }  
            if(this.props.location.state.error){
                this.setState({
                    user: '',
                    error: 'user not found :('
                })
            }     
       }
    }

    searchUser = (value) => {
        getUser(value)
        .then(response => {
          this.setState({
            user: response.data,
            error: ''
          })   
         })
         .catch(error =>{
             this.setState({
                user: '',
                error: 'User not found :('

             })
         })
    }
    

    searchRepos = (name) => {
        getRepos(name).then(response => {
            this.setState({
                repos: response.data
            })
        })
        .catch(error =>{
            this.setState({
               user: '',
               error: 'User not found :('

            })
        })
    }

    inputValue = e => {
        this.setState({
          value: e.target.value
        })
         
        
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

            {this.state.error == '' ?     
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
                <div className= 'container_repo'>
                    {this.state.repos.sort((a, b) => b.stargazers_count - a.stargazers_count).map(repo =>                    
                        <Fragment  key= {repo.id}>
                        <Repositories
                         repoName= {repo.name}
                         repoDescription={repo.description}   
                         repoStargazersCount={repo.stargazers_count}            
                        />          
                                                  
                        </Fragment>                  
                      )}
                </div>                
            </div>
            : <NotFound /> }
        </Fragment>           
        )
    }
}       
           
export default Results