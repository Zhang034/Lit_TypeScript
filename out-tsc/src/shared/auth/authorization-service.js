export class AuthorizationService {
    constructor() {
        this.key = 'key';
    }
    isAuthorized() {
        const token = this.getToken();
        return new Promise((resolve, reject) => {
            resolve(token !== null);
            // resolve(true);
        });
    }
    setToken(token) {
        localStorage.setItem(this.key, token);
    }
    getToken() {
        return localStorage.getItem(this.key);
    }
}
//# sourceMappingURL=authorization-service.js.map