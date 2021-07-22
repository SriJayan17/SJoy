import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayAlert, hideAlert } from '../actions';
import Alert from './Alert';

const Otpverification = (props) => {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const validate = (e)=>{
        e.preventDefault();
        if(document.getElementById('otp').value==='')
        {
            dispatch(displayAlert);
            setTimeout(()=>dispatch(hideAlert),2000)
        }
        else{
            document.getElementById('verification-form').submit();
        }
    }
    const alert = useSelector(state => state.alert);
    return (
        <div id='otp-verification'>
            <div className="main-navbar">
                <div>
                    <Link to='/'>
                        <h1 className="title"><i className="fab fa-instalod"></i> SJoy</h1>
                    </Link>
                </div>
            </div>
            <div className="main-section">
                <div className="show-case">
                    <img src="https://static.vecteezy.com/system/resources/previews/001/397/516/non_2x/cyber-security-illustration-free-vector.jpg" alt="forgotpassword"></img>
                </div>
                <div className="form-section">
                    <form action='https://polar-woodland-36229.herokuapp.com/otp/verification' method='POST' id="verification-form" onSubmit={validate}>
                        <h1 className="primary">
                            <i className="fas fa-clipboard-check"></i>
                            OTP Verification
                        </h1>
                        <div className="input-fields">
                            <input type='text' name='id' style={{display:"none"}} value={id}></input>
                            <input type='number' placeholder='Enter OTP' id="otp" name='otp'></input>
                            <button>
                                <i className="fas fa-check-circle"></i>
                                Verify
                            </button>
                            {alert?<Alert/>:
                            <h4>An Email containing the OTP has been sent to your Registered Email id. OTP is valid for only 5 mins</h4>}
                        </div>
                        <div className="crossbar"></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Otpverification
