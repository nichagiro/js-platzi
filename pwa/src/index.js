import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@pages/Home";
import Offline from "@components/Offline";
import '@css/index.css';
import ejecuteSW from "@functions/sw";

ejecuteSW();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
        <Offline />
        <Home />
    </>
);

