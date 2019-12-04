import React, {Fragment} from 'react'
import Nav from '../components/Navbar'


const NotFound = () =>{
    return(
        <Fragment>
            <Nav/>
            <div className='container__notfound'>
                <p> User not found :( </p>
            </div>
        </Fragment>
    )
}

export default NotFound