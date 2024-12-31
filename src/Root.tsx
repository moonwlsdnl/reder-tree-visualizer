import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

function Root() {
  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

export default Root;
