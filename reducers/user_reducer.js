import { CHANGE_USER_LOGIN_STATUS } from '../reducers/action';


const initialState  = {
    isuserloggedin : false
};

const user_reducer = (state = initialState,action) => {
    if(action.type === CHANGE_USER_LOGIN_STATUS){
        state = Object.assign({},state, {isuserloggedin : action.payload })
    }

    return state;
}

export default user_reducer;