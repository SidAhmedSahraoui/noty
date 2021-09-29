import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Redux store
import store from "./redux/store";
//components
import Home from "./components/pages/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

//layout
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
