import React, {Component, Fragment} from 'react'
import Nav from './components/Navbar/index.js'


class Results extends Component{
    constructor(props){
    super(props)
    this.state= {
        value:''
    }
    }

    render(){
        console.log(this.props);
        
        return(
            <Fragment>
                <Nav classNav='classNav'/>
                <p>OI</p>
            </Fragment>
        )
    }
}       
           
export default Results