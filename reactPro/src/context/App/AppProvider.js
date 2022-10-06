import React from 'react';
import { createContext, useContext, useReducer } from 'react'
import AppReducer from './AppReducer';
import initialStore from './InitialStore';

const AppContext = createContext();

const AppProvider = ({ children }) =>
    <AppContext.Provider value={useReducer(AppReducer, initialStore)} >
        {children}
    </AppContext.Provider>


const useStore = () => useContext(AppContext)[0]
const useDispatch = () => useContext(AppContext)[1]


export { useStore, useDispatch }
export default AppProvider;