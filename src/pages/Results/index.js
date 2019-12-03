import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'
import Profile from './components/Profile'
import { getUser } from '../../services/api/users'
import NotFound from './NotFound'


class Results extends Component{
    constructor(props){
    super(props)
    this.state= {
        value:'',
        error:''
    }
    }

    render(){
        // console.log(this.props)
        return(
            <Fragment>
                <Nav classNav='classNav'/> 
                <Profile avatar_url={this.props.location.state.user.avatar_url}
                /> 
                            
            </Fragment>
            
        )
    }
}       
           
export default Results