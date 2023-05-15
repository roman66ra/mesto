export default class UserInfo {
    constructor({ selectorUser, selectorInfo }) {
        this._selectorUser = selectorUser;
        this._selectorInfo = selectorInfo;
    }
    
    getUserInfo() {
        return {
            name: this._selectorUser.textContent,
            job: this._selectorInfo.textContent
          };
    };

    setUserInfo({ user, job }) {
        this._selectorUser.textContent = user;
        this._selectorInfo.textContent = job;
      }
}