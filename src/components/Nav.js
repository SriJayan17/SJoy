import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const url = window.location.href.split('/');
    let current;
    let bar=false;
    if(url[url.length-1]==='')
        current='home-route';
    else if(url[url.length-1]==='signup')
        current='signup-route';
    else
        current='about-route';
    const [route, setRoute] = useState(current);
    useEffect(() => {
        document.getElementById(current).style.borderBottom="2px solid #333";
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        document.getElementById(route).style.borderBottom="2px solid #333";
    }, [route])
    const routeChange=(e)=>{
        if(e.target.id===route||e.target.parentElement.id===route)
        return;
        else
        document.getElementById(route).style.border="none";
        if(e.target.id==='')
        setRoute(e.target.parentElement.id);
        else
        setRoute(e.target.id);
    }
    const displayBar = ()=>{
        if(bar)
        {
            document.getElementById('nav-links').style.display="none";
            document.getElementById('hamburger').className="primary fas fa-bars";
            bar=false;
        }
        else{
            document.getElementById('nav-links').style.display="flex";
            document.getElementById('hamburger').className="primary fas fa-times";
            bar=true;
        }
    }
    return (
        <div className="main-navbar">
            <div>
                <Link to='/'>
                    <h1 className="title"><i className="fab fa-instalod"></i> SJoy</h1>
                </Link>
            </div>
            <i className="primary fas fa-bars" id="hamburger" onClick={displayBar}></i>
            <ul id="nav-links">
                <li id="home-route" onClick={routeChange}><Link to='/'>Home</Link></li>
                <li id="signup-route" onClick={routeChange}><Link to='/signup'>Signup</Link></li>
                <li id="about-route" onClick={routeChange}><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}

export default Nav
