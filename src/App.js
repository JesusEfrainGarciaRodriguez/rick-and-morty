import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
          <Route path="/characters" component={Characters} />
          <Route path="/locations" component={Locations} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
