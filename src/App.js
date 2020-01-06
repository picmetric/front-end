import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Form from "./components/Form";
import Account from './components/Account';
// import SignupForm from "./components/Signup"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <div>Get home page from svyat</div>
        )}/>
        <Route  path="/about" render={() => (
          <div>Get about page from svyat</div>
        )}/>
        <Route path="/login" component={Form} />
        <Route path="/signup" component={Form} />

        {/* Not sure how to do this but something like "if loggedin===true, then render accountpage" */}
        <Route path="/account" component={Account} />
      </div>
    </Router>
  );
}

export default App;
