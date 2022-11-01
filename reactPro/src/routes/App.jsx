import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@pages/Session/Login";
import AppProvider from "@context/App/AppProvider";
import PersonajeProvider from "@context/personajes/Provider";
import Loading from "@components/custom/Loading";
import Protected from "./Protected";

const Home = React.lazy(() => import('@pages/Home'))

export default function App() {
    return (
        <AppProvider key='stateGlobal'>
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={
                        <Protected>
                            <PersonajeProvider key='storePersonaje'>
                                <Home />
                            </PersonajeProvider>
                        </Protected>} />
                </Routes>
            </React.Suspense>
        </AppProvider>
    );
}
