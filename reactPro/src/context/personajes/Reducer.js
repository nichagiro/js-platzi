import types from "./Types";

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_PERSONAJE:
            return {
                ...state,
                personajes:action.payload 
            }
        default:
            return state;
    }
}

export default reducer;