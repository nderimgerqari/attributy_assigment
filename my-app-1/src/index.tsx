import React from "react";
import ReactDOM from "react-dom/client";

// Stylesheet
// import "./sass/main.scss";
// import "antd/dist/antd.min.css";
// import "react-toastify/dist/ReactToastify.css";

// Screens
import App from "./screens/Main";






const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
                <App />
    </React.StrictMode>
);
