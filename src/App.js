import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Pages/Header.js";
import Home from "./Pages/Home.js";
import Footer from "./Pages/Footer.js";

//<Header />
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
