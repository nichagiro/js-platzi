import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "@pages/Home";
import Login from "@pages/Session/Login";
import AppProvider from "@context/App/AppProvider";
import PersonajeProvider from "@context/personajes/Provider";
import Loading from "@components/custom/Loading";

const Home = React.lazy(() => import('@pages/Home'))

export default function App() {
    return (
        <AppProvider key='stateGlobal'>
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={
                        <PersonajeProvider key='storePersonaje'>
                            <Home />
                        </PersonajeProvider>
                    } />
                </Routes>
            </React.Suspense>
        </AppProvider>
    );
}
