import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/database';
import {onLogin} from '../events'


firebase.initializeApp({apiKey: "AIzaSyDpMeGxNh-VjCXeMDmrAfyXw-pPKgN2ogs", authDomain: "iseeds-1020.firebaseapp.com", databaseURL: "https://iseeds-1020.firebaseio.com", storageBucket: "iseeds-1020.appspot.com", messagingSenderId: "974616571179"});

window.logout = () => firebase.auth().signOut()

var provider = new firebase.auth.TwitterAuthProvider();

export const doBookmark = ({uid,url}) => {
  var ref = firebase.database().ref('bookmarks');
  ref.push({
    uid,
    url,
    successful:false
  });
}

export const login = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          onLogin(user)
          return true;
        }
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            var user = result.user;
            var usersRef = firebase.database().ref(`users/${user.uid}`);
            usersRef.set({
                twitter: {
                    ...user.providerData[0],
                    accessToken: token,
                    secret: secret
                }
            });
        })
    })
}
