import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayAlert, hideAlert } from '../actions';
import Alert from './Alert';

const SuccessOtpverification = (props) => {
    const id = props.match.params.id;
    const [pvisibility, setPVisibility] = useState("eye")
    const [cpvisibility, setCPVisibility] = useState("eye")
    const changePVisibility = ()=>{
        if(pvisibility==="eye")
        {
            setPVisibility("eye-slash");
            document.getElementById('pwd').type="text";
        }
        else
        {
            setPVisibility("eye");
            document.getElementById('pwd').type="password";
        }

    }
    const changeCPVisibility = ()=>{
        if(cpvisibility==="eye")
        {
            setCPVisibility("eye-slash");
            document.getElementById('cpwd').type="text";
        }
        else
        {
            setCPVisibility("eye");
            document.getElementById('cpwd').type="password";
        }

    }
    const dispatch = useDispatch();
    const validate = (e)=>{
        e.preventDefault();
        if(document.getElementById('pwd').value===''||document.getElementById('cpwd').value==='')
        {
            dispatch(displayAlert);
            setTimeout(()=>dispatch(hideAlert),2000)
        }
        else{
            document.getElementById('reset-form').submit();
        }
    }
    const alert = useSelector(state => state.alert);
    return (
        <div id="success-verification">
            <div className="main-navbar">
                <div>
                    <Link to='/'>
                        <h1 className="title"><i className="fab fa-instalod"></i> SJoy</h1>
                    </Link>
                </div>
            </div>
            <div className="main-section">
                <div className="show-case">
                    <img src="https://d2v1hpltdjq1rf.cloudfront.net/static/account/assets/images/ic-forgot.png" alt="reset"></img>
                </div>
                <div className="form-section">
                <form action='https://polar-woodland-36229.herokuapp.com/password/reset' method='POST' id="reset-form" onSubmit={validate}>
                    <h1 className="primary">
                        <i className="fas fa-clipboard-check"></i>
                        Password Reset
                    </h1>
                    <div className="input-fields">
                        <input type='text' name='id' style={{display:"none"}} value={id}></input>
                        <div className="password-field">
                            <input type="password" id="pwd" name="password" placeholder="Enter your New Password"></input>
                            <div className="secondary" onClick={changePVisibility}>
                                <i className={`fas fa-${pvisibility}`}></i>
                            </div>
                        </div>
                        <div className="password-field">
                            <input type="password" id="cpwd" name="confirm-password" placeholder="Retype the Password"></input>
                            <div className="secondary" onClick={changeCPVisibility}>
                                <i className={`fas fa-${cpvisibility}`}></i>
                            </div>
                        </div>
                        <button>
                            <i className="fas fa-cloud-upload-alt"></i>
                            Reset
                        </button>
                        {alert?<Alert/>:
                        <h4>Once You click Reset Button, your Password will be Permanently changed and the Previous Password can't be retrived.</h4>}
                    </div>
                    <div className="crossbar"></div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default SuccessOtpverification
