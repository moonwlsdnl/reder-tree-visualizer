import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function Root() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default Root;
