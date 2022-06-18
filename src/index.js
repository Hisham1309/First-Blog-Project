import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Store/AuthProvider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
