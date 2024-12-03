import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobolContextProvider } from "./context/GlobolContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobolContextProvider>
    <App />
  </GlobolContextProvider>
);
