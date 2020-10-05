export const CHANGE_USER_LOGIN_STATUS = "Change user login status";


export const ChangeUserStatus = (data)=>{
    return {
        type : CHANGE_USER_LOGIN_STATUS,
        payload : data || false
    }
}