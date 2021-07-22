import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMyDmUsrs,getUsers,displayLoader, getUser, hideLoader} from '../actions';
import { Link } from 'react-router-dom';
import User from './User';
import Loader from './Loader';

const Home = (props) => {
    const id=props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser(id));
        dispatch(displayLoader);
        dispatch(getMyDmUsrs(id));
        dispatch(getUsers);
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        if(dmusers.length===0)
            dispatch(hideLoader);
    }, [dmusers]);
    const [dmusers, setDmUsers] = useState([]);
    const [matchusers, setMatchUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [myinfo, setMyinfo] = useState([]);
    let display = false;
    useSelector(state => state.dmuser).then(res=>{
        setDmUsers(res);
    });
    
    useSelector(state => state.user).then(res=>{
        setMyinfo(res);
    });
    useSelector(state => state.users).then(res=>{
        setUsers(res);
    });
    const loading = useSelector(state => state.loading);
    const getMatches = (e)=>{
        const username = e.target.value;
        if(username!=='')
        {
            const array=[];
            users.forEach(user=>{
                if(user.name.toLowerCase().includes(username.toLowerCase()))
                {
                    array.indexOf(user)===-1&&array.push(user);
                }
            })
            setMatchUsers([...array]);
        }
        else{
            setMatchUsers([]);
        }
    }
    const getInfo = ()=>{
        if(display===false)
        {
            document.getElementById('user-info').style.display='grid';
            document.getElementById('user-info').style.gridTemplateColumns='1fr';
            document.getElementById('user-info').style.gridGap='1rem';
            display=true;
        }else{
            document.getElementById('user-info').style.display='none';
            display=false;
        }
    }
    return (
        <div id="home">
            <div className="main-navbar">
                <div>
                    <Link to='/'>
                        <h1 className="title"><i className="fab fa-instalod"></i> SJoy</h1>
                    </Link>
                </div>
                <ul>
                    <li onClick={getInfo}><i className="title fas fa-user-secret"></i></li>
                </ul>
                <div id="user-info">
                    <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="user"></img>
                    <h1 className="secondary">{myinfo.name}</h1>
                    <div>
                        <Link to='/'>
                            <button>Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="body-section">
                <div className="history">
                    <h1 className="secondary"><i className="fas fa-comment"></i>Messages</h1>
                    {dmusers.length>0?dmusers.map((uid,index)=>{
                        return <User key={index} userid={uid} loginid={id}/>
                    }):!loading?<h1 className="secondary" style={{textAlign:'center'}}>
                        <i className="fas fa-poll"></i>No Messages Yet.
                    </h1>:<Loader/>}
                </div>
                <div className="search">  
                    <h1 className="secondary">
                        <i className="fas fa-users"></i>Find Your Friends
                    </h1>
                    <div className="form-section">
                        <form id="search-form">
                            <input type="text" placeholder="Search by User Name" name="username" id="username" onKeyUp={getMatches}></input>
                            <div className="search-icon">
                                <h1 className="secondary">
                                    <i className="fas fa-search"></i>
                                </h1>
                            </div>
                        </form>
                        <div className="result">
                            {matchusers.length>0&&!loading?
                                matchusers.map(user=>
                                    <Link to={`/dm/${id}/${user._id}`} key={user._id}>
                                       <div className="user">
                                            <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="user"></img>
                                            <h1 className="secondary">{user.name}</h1>
                                        </div>
                                    </Link>
                                ):<h1 className="secondary" style={{textAlign:'center'}}><i className="fas fa-poll"></i>Search Results appear here</h1>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
