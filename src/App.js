import './App.css';
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Home from './components/home';
import Dms from './components/Dms';
import Notfound from './components/Notfound';
import About from './components/About';
import Forgotpassword from './components/Forgotpassword';
import Otpverification from './components/Otpverification';
import SuccessOtpverification from './components/SuccessOtpverification';
import Fail from './components/Fail';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Nav/>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Nav/>
            <Signup/>
          </Route>
          <Route exact path='/about'>
            <Nav/>
            <About/>
          </Route>
          <Route exact path='/forgot-password/'>
            <Forgotpassword/>
          </Route>
          <Route exact path='/dm/:lid/:uid' render={props=>(
            <Dms {...props}/>
          )}>
          </Route>
          <Route exact path='/home/:id' render={props=>(
            <Home {...props}/>
          )}>
          </Route>
          <Route exact path='/:id/otp-verification' render={props=>(
            <Otpverification {...props}/>
          )}>
          </Route>
          <Route exact path='/:id/otp-verification/success' render={props=>(
            <SuccessOtpverification {...props}/>
          )}>
          </Route>
          <Route exact path='/incorrect-password'>
            <Fail text='Oops! Incorrect Password'/>
          </Route>
          <Route exact path='/incorrect-userid'>
            <Fail text='Oops! User Id does not exist!'/>
          </Route>
          <Route exact path='/failed-verification'>
            <Fail text='Oops! OTP Verification Failed.'/>
          </Route>
          <Route component={Notfound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
