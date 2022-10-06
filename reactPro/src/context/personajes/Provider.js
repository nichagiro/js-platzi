import React, { createContext, useContext, useReducer } from "react"
import reducer from "./Reducer";
import state from "./State";

const StoreContext = createContext()

const personajeProvider = ({ children }) =>
    <StoreContext.Provider value={useReducer(reducer, state)}>
        {children}
    </StoreContext.Provider>


const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { useStore, useDispatch }
export default personajeProvider;

