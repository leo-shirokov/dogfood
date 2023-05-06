import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./providers/ProductsProvider";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProductsProvider>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <App />
                </MantineProvider>
            </ProductsProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
