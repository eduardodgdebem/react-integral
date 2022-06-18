import "./App.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import IntegralComponent from "./components/integral/IntegralComponent";

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <div className="App">
        <IntegralComponent></IntegralComponent>
      </div>
    </GeistProvider>
  );
}

export default App;
