import React,{Fragment, useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hideLoader } from '../actions';

const User = (props) => {
    const uid = props.userid;
    const logid = props.loginid;
    const [userinfo, setUserinfo] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [])
    const getInfo = async()=>{
        const res = await fetch(`https://polar-woodland-36229.herokuapp.com/get/user/${uid}`);
        const resdata = await res.json();
        setUserinfo(resdata);
        dispatch(hideLoader);
    }
    return (
        <Fragment>
            <Link to={`/dm/${logid}/${uid}`}>
                <div className="user">
                    <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="user"></img>
                    <h1 className="secondary">{userinfo.name}</h1>
                </div>
            </Link>
        </Fragment>
    )
}

export default User
