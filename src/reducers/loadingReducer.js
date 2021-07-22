const loadingReducer = (state=false,action)=>{
    switch(action.type){
        case 'DISPLAYLOADER':
            return true
        case 'HIDELOADER':
            return false
        default:
            return state
    }
}

export default loadingReducer