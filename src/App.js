import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import Form from "./components/Form";
import Account from "./components/Account";
import ImagePage from "./components/ImagePage";
// import SignupForm from "./components/Signup";

function App() {
  //Global state
  //needs to be set after user is logged in, not initially
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState({})
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(res => {
          console.log(res.data);
          //access returned object, setItems to returned images

          setItems(res.data);
          console.log(items);
        

          //map over items, and make each one a link to it's own page, style for gridview
      })
      .catch(err => {
          console.log(err);
      })
  }, []);

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
        <Route path="/login" component={Form} />
        <Route path="/signup" component={Form} />

        {/* Not sure how to do this but something like "if loggedin===true, then render accountpage" */}
        <Route exact path="/account" component={() => (
          <Account items={items} clicked={clicked} setClicked={setClicked}/>
        )} />

          


        {/* change url to match endpoint for imageid, change prop picURL to match endpoint for image source */}
        <Route
          path={`/account/image/${clicked.id}`}
          component={() => (
            <ImagePage picURL= {clicked.src} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
 