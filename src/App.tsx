import "./App.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import Home from "./components/home";

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <div className="App">
        <Home></Home>
      </div>
    </GeistProvider>
  );
}

export default App;
