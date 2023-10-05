import React from "react";
import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Router from "./routes/Router";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
