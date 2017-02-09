import React, { Component } from 'react';
import logo from './logo.svg';
import mobx from 'mobx'
const {observable, computed, autorun} = mobx;
import './App.css';
var Firebase = require("firebase");
import {enableLogging} from 'mobx-logger';
enableLogging()

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

class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false;
    constructor(title) {
        this.title = title;
    }
}

let todo = new Todo('name')

var disposer = autorun(() => console.log(todo.title));


todo.title = 'hello'

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
