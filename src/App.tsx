//@ts-check
import MyComponents from "./Components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Form from "./Components/Form";
import Dashboard from "./Components/Dashboard";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Router>
  );
}

export default App;
