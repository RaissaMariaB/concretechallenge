import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'
import Profile from './components/Profile'
import Repositories from '../Results/components/Repositories'
import { getUser, getRepos } from '../../services/api/users'
import NotFound from './NotFound'
import IconsText from './components/IconsText/index.js'

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
                    user: this.props.location.state.user,
                })

            }  
            if(this.props.location.state.error){
                this.setState({
                    error: 'user not found :('
                })
            }      
       }
    }

    inputValue = e => {
        this.setState({
          value: e.target.value
        })
        console.log( this.state.value);
        
      }

    searchUser = (name) => {
        getUser(name)
        .then(response => {
          this.setState({
            user: response.data,
            error: ''
          }) 

         })
         .catch( error => {
            this.setState({                
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
        .catch( error => {
            this.setState({                
                error: 'User not found :('
            })
        })
    }


    searching = () =>{               
        this.searchUser(this.state.value);
        this.searchRepos(this.state.value);
    }  

    render(){
        const {avatar_url, name, login, company, location, public_repos, followers, following} = this.state.user
                
        return(
            <Fragment>
           
            <Nav classNav = 'classNav'
            typing = {this.inputValue}
            click = {this.searching}
            />

            {this.state.error == '' ?     
            <div className = 'container_results'>          
                <Profile avatar_url = {avatar_url}
                user_name = {name}
                user_login = {login}
                textOrganization = {company}
                textLocation = {location}
                textStar = {followers}
                textRepositories = {public_repos}
                textFollowers = {following}
                /> 
                <div>
                    {this.state.repos.map(repo =>                     
                        <Fragment  key = {repo.id}>
                        <Repositories
                         repoName = {repo.name}
                         repoDescription = {repo.description}                
                        />                 
                        <IconsText classIcon = 'icon__repositories' >
                         {repo.stargazers_count}
                        </IconsText>
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