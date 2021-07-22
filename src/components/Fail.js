import React from 'react'
import { Link } from 'react-router-dom'

const Fail = ({text}) => {
    return (
        <div id="failed-verification">
            <div>
                <img className="img-1" src="https://i.pinimg.com/originals/16/b2/b3/16b2b38d1acedd03c56fbb029fd9cf00.gif" alt="error"></img>
                <div className="content">
                    <img className="img-2" src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif" alt="error"></img>
                    <h1 className="primary">
                        {text}.
                    </h1>
                </div>
                <Link to='' className="btn">
                    Back To Home
                </Link>
            </div>
        </div>
    )
}

export default Fail
