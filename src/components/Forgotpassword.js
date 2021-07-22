import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { displayAlert, hideAlert } from '../actions';
import forgotpassword from '../images/forgotpwd.jpg'
import Alert from './Alert';

const Forgotpassword = () => {
    const dispatch = useDispatch();
    const validate = (e)=>{
        e.preventDefault();
        if(document.getElementById('id').value==='')
        {
            dispatch(displayAlert);
            setTimeout(()=>dispatch(hideAlert),2000)
        }
        else{
            document.getElementById('forgotpwd-form').submit();
        }
    }
    const alert = useSelector(state => state.alert);
    return (
        <div id="forgot-password">
            <div className="main-navbar">
                <div>
                    <Link to='/'>
                        <h1 className="title"><i className="fab fa-instalod"></i> SJoy</h1>
                    </Link>
                </div>
            </div>
            <div className="main-section">
                <div className="show-case">
                    <img src={forgotpassword} alt="forgotpassword"></img>
                </div>
                <div className="form-section">
                    <form id="forgotpwd-form" action="https://polar-woodland-36229.herokuapp.com/forgotpassword" method="POST" onSubmit={validate}>
                        <h1 className="primary">
                            <i className='fas fa-question-circle'></i>
                            Forgot Password
                        </h1>
                        <div className="input-fields">
                            <input type="text" id="id" name="id" placeholder="User Id"></input>
                            <button>
                                <i className="fas fa-redo-alt"></i>
                                Reset
                            </button>
                            {alert?<Alert/>:
                            <h3>You will recieve an OTP in your registered E-mail address</h3>}
                        </div>
                        <div className="crossbar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgotpassword
