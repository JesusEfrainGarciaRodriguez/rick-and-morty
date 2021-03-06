import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Navbar />

      <Switch>
          <Route path="/characters" component={Characters} />
          <Route path="/locations" component={Locations} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/" component={Index} />
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
