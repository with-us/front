import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Firebase = require("firebase");

var ref = new Firebase("https://tks-blog.firebaseio.com");
var authData = ref.getAuth();
if (authData) {
  console.log("User " + authData.uid + " is logged in with " + authData.provider);
} else {
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      var usersRef = ref.child("users");
      usersRef.set({
        [authData.uid]: {
          twitter:authData.twitter
        }
      });
    }
  });
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!!!!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
