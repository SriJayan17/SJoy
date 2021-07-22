export const displayAlert = {
    type:'DISPLAYALERT'
}

export const hideAlert = {
    type:'HIDEALERT'
}

export const displayLoader = {
    type:'DISPLAYLOADER'
}

export const hideLoader = {
    type:'HIDELOADER'
}

export const getUser = (id)=>{
    return {
        type:'GETUSER',
        id
    }
}

export const getUsers = {
        type:'GETUSERS'
}

export const getMyDmUsrs = (id)=>{
    return {
        type:'GETMYDMUSRS',
        id
        }
}

export const getMsgs = (uid,lid)=>{
    return {
        type:'GETMSGS',
        uid,
        lid
    }
}