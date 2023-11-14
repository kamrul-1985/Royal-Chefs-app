import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "../src/components/Routes/Routes"

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);