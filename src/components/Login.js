import React, { useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { displayAlert, hideAlert } from "../actions";
import Alert from "./Alert";
import loginImage from "../images/loginimg.png";

const Login = () => {
  const [visibility, setVisibility] = useState("eye");
  const changeVisibility = () => {
    if (visibility === "eye") {
      setVisibility("eye-slash");
      document.getElementById("pwd").type = "text";
    } else {
      setVisibility("eye");
      document.getElementById("pwd").type = "password";
    }
  };
  const dispatch = useDispatch();
  const validate = (e) => {
    e.preventDefault();
    if (
      document.getElementById("id").value === "" ||
      document.getElementById("pwd").value === ""
    ) {
      dispatch(displayAlert);
      setTimeout(() => dispatch(hideAlert), 2000);
    } else {
      document.getElementById("login-form").submit();
    }
  };
  const alert = useSelector((state) => state.alert);
  return (
    <div id="login">
      <div className="showcase-section">
        <h1 className="primary">
          <i className="fas fa-comments"></i>Welcome to SJoy!
        </h1>
        <h2 className="teritary">
          Your Personalized Chatting Web Application. Login to your account now
          and Enjoy unlimited free Chatting.
        </h2>
        <img src={loginImage} alt="loginpage-img-1"></img>
      </div>
      <div className="form-section">
        <div className="cont">
          <h1 className="primary">
            <i className="fas fa-lock"></i>User Login
          </h1>
          <form
            id="login-form"
            action="https://polar-woodland-36229.herokuapp.com/login"
            method="POST"
            onSubmit={validate}
          >
            <input type="text" id="id" name="id" placeholder="User Id"></input>
            <div className="password-field">
              <input
                type="password"
                id="pwd"
                name="password"
                placeholder="Password"
              ></input>
              <div className="secondary" onClick={changeVisibility}>
                <i className={`fas fa-${visibility}`}></i>
              </div>
            </div>
            <button className="btn btn-primary">
              <i className="fas fa-key"></i>Login
            </button>
            <div className="form-footer">
              {alert ? (
                <Alert />
              ) : (
                <Fragment>
                  <Link to="/signup">
                    <h5 className="teritary">
                      <i className="fas fa-plus-circle"></i>New user? SignUp
                    </h5>
                  </Link>
                  <Link to="/forgot-password/">
                    <h5 className="teritary">
                      <i className="fas fa-question-circle"></i>Forgot Password
                    </h5>
                  </Link>
                </Fragment>
              )}
            </div>
          </form>
          {/* <div className="crossbar"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
