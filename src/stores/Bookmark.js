import mobx,{observable, computed, autorun,action,observe,incercept} from 'mobx'

export default class Bookmark {
  @observable uid;
  @observable url;
}
