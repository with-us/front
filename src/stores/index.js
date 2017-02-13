import User from './User'
import Bookmark from './Bookmark'
import {onLoginAndSetURL} from '../events'
import {
    observable,
    computed,
    autorun,
    action,
    observe,
    incercept
} from 'mobx';

export let me = new User()
export let bookmark = new Bookmark()

autorun(() => {
    if (me.uid && bookmark.url) {
      const {uid} = me
      const {url} = bookmark
      onLoginAndSetURL({uid, url})
    }
})
