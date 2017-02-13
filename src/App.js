import React, { Component } from 'react';
import logo from './logo.svg';
import {login} from './libs/firebase';
import {me} from './stores';
import mobx from 'mobx'
const {observable, computed, autorun,action,observe,incercept} = mobx;
import './App.css';
const objectAssign = require('object-assign');
import {enableLogging} from 'mobx-logger';
enableLogging()







var disposer = autorun(() => console.log());
disposer()

me.accessToken = 'aaa'


console.log(me)


const onLogin = (user)=>{
  me.displayName = user.displayName
  me.photoURL = user.photoURL
  me.providerId = user.providerId
  me.uid = user.uid
}

window.me = ()=> console.log(me.uid)

observe(me, (change) => {
    console.log(change.type, change.name, "from", change.oldValue, "to", change.object[change.name]);
});

login(onLogin)


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
