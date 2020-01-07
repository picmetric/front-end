import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Form from "./components/Form";
import Account from "./components/dashboard/Account";
// import ImagePage from "./components/dashboard/ImagePage";
import PrivateRoute from "./components/auth/PrivateRoute";
import LoginForm from "./components/auth/LoginForm";
// import SignupForm from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={() => <div>Get home page from svyat</div>}
        />
        <Route
          path="/about"
          render={() => <div>Get about page from svyat</div>}
        />

        <Route exact path="/account" component={Account} />

        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={Form} />

        {/* change url to match endpoint for imageid, change prop picURL to match endpoint for image source */}
        {/* <Route
          path={`/account/image/${clicked.id}`}
          component={() => <ImagePage picURL={clicked.src} />}
        /> */}
      </div>
    </Router>
  );
}

export default App;
