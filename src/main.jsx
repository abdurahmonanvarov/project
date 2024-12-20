import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobolContextProvider } from "./context/GlobolContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <GlobolContextProvider>
    <App />
    <ToastContainer />
  </GlobolContextProvider>
);
