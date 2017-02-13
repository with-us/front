import {me, bookmark} from './stores';
import {login, doBookmark} from './libs/firebase';
const queryString = require('query-string');
import {
    observable,
    computed,
    autorun,
    action,
    observe,
    incercept
} from 'mobx';

export const onLogin = (user) => {
    me.displayName = user.displayName
    me.photoURL = user.photoURL
    me.providerId = user.providerId
    me.uid = user.uid
}

export const onLoad = () => {
    const parsed = queryString.parse(location.search);
    bookmark.url = parsed.url
}

export const onLoginAndSetURL = (obj) => {
    doBookmark(obj)
}
