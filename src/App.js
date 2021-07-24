import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
