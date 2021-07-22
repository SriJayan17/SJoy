import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {displayAlert, hideAlert} from '../actions/index'
import Alert from './Alert';
const Signup = () => {
    const dispatch = useDispatch();
    const validate = (e)=>{
        e.preventDefault();
        if(document.getElementById('name').value===''||document.getElementById('id').value===''||document.getElementById('email').value===''||document.getElementById('phno').value===''||document.getElementById('pwd').value===''||document.getElementById('cpwd').value==='')
        {
            dispatch(displayAlert);
            setTimeout(()=>dispatch(hideAlert),2000)
        }
        else{
            document.getElementById('signup-form').submit();
        }
    }
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
    const alert = useSelector(state => state.alert);
    return (
        <div id='signup'>
            <div className="showcase-section">
                <h1 className="primary"><i className="fas fa-comments"></i>Welcome to SJoy!</h1>
                <h2 className="teritary">Your Personalized Chatting Web Application. Create an account now and Enjoy unlimited free Chatting.</h2>
                <img src="https://www.tutoreye.com/images/home/login-illus-1.svg" alt="signupimage"></img>
            </div>
            <div className="form-section">
                <div className="cont">
                    <h1 className="primary"><i className="fas fa-plus"></i>User Signup</h1>
                    <form id="signup-form" action="https://polar-woodland-36229.herokuapp.com/post/user" method="POST" >
                        <input type="text" id="name" name="name" placeholder="User Name"></input>
                        <input type="text" id="id" name="id" placeholder="User Id"></input>
                        <input type="email" id="email" name="email" placeholder="E-mail"></input>
                        <input type="tel" id="phno" name="phno" placeholder="Phone Number"></input>
                        <div className="password-field">
                            <input type="password" id="pwd" name="password" placeholder="Password"></input>
                            <div className="secondary" onClick={changePVisibility}>
                                <i className={`fas fa-${pvisibility}`}></i>
                            </div>
                        </div>
                        <div className="password-field">
                            <input type="password" id="cpwd" name="cpassword" placeholder="Password"></input>
                            <div className="secondary" onClick={changeCPVisibility}>
                                <i className={`fas fa-${cpvisibility}`}></i>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={validate}><i className="fas fa-plus-circle"></i>SignUp</button>
                        {alert&&<Alert/>}
                    </form>
                    <div className="crossbar"></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
