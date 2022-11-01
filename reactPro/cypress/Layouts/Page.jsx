import React from 'react';
import AppProvider from "@context/App/AppProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Page = ({ children, path }) => {
    return (
        <BrowserRouter>
            <AppProvider key='stateGlobal'>
                <Routes>
                    <Route path={path} element={children} />
                </Routes>
            </AppProvider>
        </BrowserRouter>
    )
}

export default Page

Page.defaultProps = {
    path: '/'
}

