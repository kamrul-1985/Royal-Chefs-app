import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "../src/components/Routes/Routes"

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from "./components/Provider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);