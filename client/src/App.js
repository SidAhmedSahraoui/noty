import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Home from "./components/pages/home";
import Register from "./components/pages/auth/register";
import Login from "./components/pages/auth/login";
//layout
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
