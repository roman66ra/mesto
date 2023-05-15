export default class UserInfo {
    constructor({ user, info }) {
        this._user = user;
        this._info = info;
    }
    
    getUserInfo() {
        return {
            name: this._user.textContent,
            job: this._info.textContent
          };
    };

    setUserInfo({ user, job }) {
        this._user.textContent = user;
        this._info.textContent = job;
      }
}