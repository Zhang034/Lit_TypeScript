import { __decorate } from "tslib";
import { LitElement, html, customElement } from 'lit-element';
let Blog = class Blog extends LitElement {
    render() {
        return html ` <slot></slot> `;
    }
};
Blog = __decorate([
    customElement('lit-blog')
], Blog);
export { Blog };
//# sourceMappingURL=blog.js.map