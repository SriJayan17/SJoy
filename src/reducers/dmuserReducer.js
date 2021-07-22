const dmuserReducer = async (state={},action)=>{
    switch(action.type){
        case 'GETMYDMUSRS':
            const result = await fetch(`https://polar-woodland-36229.herokuapp.com/get/dmusers/${action.id}`);
            const resultdata = await result.json();
            return resultdata;
        default:
            return state;
    }
}

export default dmuserReducer;