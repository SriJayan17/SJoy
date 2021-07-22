const AlertReducer = (state=false,action)=>{
    switch(action.type){
        case 'DISPLAYALERT':
            return true
        case 'HIDEALERT':
            return false
        default:
            return state
    }
}

export default AlertReducer;