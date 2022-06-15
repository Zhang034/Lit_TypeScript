import { __decorate } from "tslib";
import { LitElement, html, customElement, property } from 'lit-element';
import { router } from '../index';
let Admin = class Admin extends LitElement {
    render() {
        return html `
      <h2>Admin</h2>
      <p>Welcome ${this.username}</p>
      <p>Only for authorized users</p>
      <p>Go to <a href="${router.urlForPath('/about')}">About</a></p>
    `;
    }
    onBeforeEnter(location, commands, router) {
        console.log('onBeforeEnter');
        if (!this.isAuthorized()) {
            // sync operation
            // return commands.redirect('/');
            // async operation
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // console.log('Not authorized, redirect to home page');
                    resolve(commands.redirect('/'));
                }, 2000);
            });
        }
        // console.log('You can see this page');
    }
    onAfterEnter(location, commands, router) {
        console.log('onAfterEnter');
        // Read params from URL
        const section = location.params.section; // path: 'admin/:section'
        const username = new URLSearchParams(location.search).get('username');
        console.log('section', section);
        console.log('username', username);
        // Assign the username value from the URL
        this.username = username || 'user';
        // No need to return a result.
    }
    onBeforeLeave(location, commands, router) {
        console.log('onBeforeLeave');
        const leave = window.confirm('Are you sure to leave this page?');
        if (!leave) {
            // sync operation
            // return commands.prevent();
            // async operation
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // console.log('Not authorized, redirect to home page');
                    console.log('resolved');
                    resolve(commands.prevent());
                }, 2000);
            });
        }
    }
    onAfterLeave(location, commands, router) {
        console.log('onAfterLeave');
        alert('Just wanted to say goodbye!');
    }
    isAuthorized() {
        // Logic to determine if the current user can see this page
        return true;
    }
};
__decorate([
    property({ type: String })
], Admin.prototype, "username", void 0);
Admin = __decorate([
    customElement('lit-admin')
], Admin);
export { Admin };
//# sourceMappingURL=admin.js.map