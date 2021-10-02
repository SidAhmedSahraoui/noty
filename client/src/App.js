import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Redux store
import store from "./redux/store";

//components
import Home from "./components/pages/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Notes from "./components/pages/notes";
import AddNote from "./components/pages/addNote";
import Profile from "./components/pages/profile";
import Settings from "./components/pages/settings";

//layouts
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import Alerts from "./components/layout/alerts";
//Routes
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/notes" component={Notes} />
              <Route exact path="/notes/add" component={AddNote} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
