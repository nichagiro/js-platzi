import types from "./Types";

const AppReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer