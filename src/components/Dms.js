import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMsgs } from '../actions';
const Dms = (props) => {
    const uid = props.match.params.uid;
    const lid = props.match.params.lid;
    const [userinfo, setUserinfo] = useState({});
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getInfo();
        dispatch(getMsgs(uid,lid));
        // eslint-disable-next-line
    }, [])
    useSelector(state => state.messages).then(res=>setMessages(res));
    const getInfo = async()=>{
        const res = await fetch(`https://polar-woodland-36229.herokuapp.com/get/user/${uid}`);
        const resdata = await res.json();
        setUserinfo(resdata);
    }
    const scrollDown=()=>{
        document.getElementById('msgs').scrollBy(0,80)
    }
    const scrollUp=()=>{
        console.log("hi");
        document.getElementById('msgs').scrollBy(0,-80);
    }
    setTimeout(()=>{
        document.getElementById('msgs').scrollBy(0,document.getElementById('msgs').scrollHeight);
    },10)
    return (
        <div className="dms">
            <div className="header">
                <div>
                    <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="user"></img>
                    <h1 className="primary">{userinfo.name}</h1>
                </div>
                <Link to={`/home/${lid}`} className="title">
                    <i className="fas fa-arrow-circle-left"></i>
                </Link>
            </div>
            <div className="messages-section" id="msgs">
                {messages.map(msg=>{
                    if(msg.sentBy===lid)
                    return <div className="rmsg">
                        <h1 className="teritary">{msg.message}</h1>
                    </div>
                    else
                    return  <div className="lmsg">
                    <h1 className="teritary">{msg.message}</h1>
                </div>
                })}
            </div>
            <div className="form-section">
                <form id="message-form" action='https://polar-woodland-36229.herokuapp.com/post/message' method="POST" >
                    <input type="text" name="sentBy" value={lid} style={{display:"none"}}></input>
                    <input type="text" name="sentTo" value={uid} style={{display:"none"}}></input>
                    <div>
                        <input type="text" placeholder="Type your Message here" name="message"></input>
                        <button>
                            <i className="secondary fas fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="nav">
                <button className="up" onClick={scrollUp}><i className="fas fa-chevron-circle-up primary"></i></button>
                <button className="down" onClick={scrollDown}><i className="fas fa-chevron-circle-down primary"></i></button>
            </div>
        </div>
    )
}

export default Dms
