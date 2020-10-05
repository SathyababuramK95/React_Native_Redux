import { CHANGE_USER_LOGIN_STATUS, STORE_USER_DETAILS } from '../reducers/action';


const initialState  = {
    isuserloggedin : false,
    userDetails : {}
};

const user_reducer = (state = initialState,action) => {
    if(action.type === CHANGE_USER_LOGIN_STATUS){
        state = Object.assign({},state, {isuserloggedin : action.payload })
    }
    else if(action.type === STORE_USER_DETAILS){
        state = Object.assign({},state, {userDetails : action.payload })
    }

    return state;
}

export default user_reducer;