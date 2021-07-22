const usersReducer = async(state=[],action)=>{
    switch(action.type){
        case 'GETUSERS':
            const res = await fetch('https://polar-woodland-36229.herokuapp.com/get/users');
            const resdata = await res.json();
            return resdata;
        default:
            return state;
    }
}

export default usersReducer;