import "./App.css";
import Router from "./Pages/Router";
import { SnackbarProvider } from "notistack";
import { ServerStateProvider } from "./Context/ServerState";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <ServerStateProvider>
          <Router />
        </ServerStateProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
