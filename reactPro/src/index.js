import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@routes/App";
import axiosMiddleware from "../middleware/axiosMiddleware";

axiosMiddleware();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);
