import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div id="not-found">
            <div>
                <img src="https://salesboxai.com/wp-content/uploads/2020/03/404-snow.gif" alt="404"></img>
                <h1 className="title">Opps! Page Not Found</h1>
                <Link className="secondary" to='/'>
                    <i className="fas fa-arrow-circle-left"></i> 
                    Go Back To Home
                </Link>
            </div>
        </div>
    )
}

export default Notfound
