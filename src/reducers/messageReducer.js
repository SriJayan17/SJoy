const messageReducer = async(state=[],action)=>{
    switch(action.type){
        case 'GETMSGS':
            const result = await fetch(`https://polar-woodland-36229.herokuapp.com/get/messages/${action.uid}/${action.lid}`);
            const resultdata = await result.json();
            return resultdata;
        default:
            return state
    }
}

export default messageReducer;