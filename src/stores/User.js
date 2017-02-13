import mobx,{observable, computed, autorun,action,observe,incercept} from 'mobx'

export default class User {
  @observable accessToken;
  @observable displayName;
  @observable photoURL;
  @observable providerId;
  @observable secret;
  @observable uid;
}
