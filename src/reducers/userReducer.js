const userReducer = async (state={},action)=>{
    switch(action.type){
        case 'GETUSER':
            const res = await fetch(`https://polar-woodland-36229.herokuapp.com/get/user/${action.id}`);
            const resdata = await res.json();
            return resdata;
        default:
            return state;
    }
}

export default userReducer;