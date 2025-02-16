import { BrowserRouter } from "react-router-dom";
import "./css/App.css";
import ThemeProvider from "./theme";
import Routes from "./routes/Routes";
import { SnackbarProvider } from "notistack";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
      <SnackbarProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </SnackbarProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
