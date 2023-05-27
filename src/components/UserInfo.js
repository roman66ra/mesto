export default class UserInfo {
    constructor({ user, info, link }) {
        this._user = user;
        this._info = info;
        this._link = link;
    }
    
    getUserInfo() {
        return {
            name: this._user.textContent,
            job: this._info.textContent
          };
    };

    setUserInfo(data) {
        this._user.textContent = data.name;
        this._info.textContent = data.about;
      }

    setUserAvatar(data) {
        this._link.src = data;
      }
}