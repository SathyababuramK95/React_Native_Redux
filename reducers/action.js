export const CHANGE_USER_LOGIN_STATUS = "Change user login status";
export const STORE_USER_DETAILS = "Store User Details";


export const ChangeUserStatus = (data)=>{
    return {
        type : CHANGE_USER_LOGIN_STATUS,
        payload : data || false
    }
}

export const StoreUserDetails = (data)=>{
    return {
        type : STORE_USER_DETAILS,
        payload : data || {}
    }
}
