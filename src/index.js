import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import ProductsProvider from "./providers/ProductsProvider";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ProductsProvider>
                    <MantineProvider withGlobalStyles withNormalizeCSS>
                        <App />
                    </MantineProvider>
                </ProductsProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
