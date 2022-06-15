import { __decorate } from "tslib";
import { Router } from '@vaadin/router';
import { LitElement, html, customElement, property, css } from 'lit-element';
import { POSTS } from './data';
let BlogPosts = class BlogPosts extends LitElement {
    constructor() {
        super();
    }
    render() {
        var _a;
        this.loadBlogCard();
        return html `
      <h2>Blog Posts</h2>
      ${(_a = this.blogPosts) === null || _a === void 0 ? void 0 : _a.map(post => html `<blog-card .post="${post}"></blog-card>`)}
    `;
    }
    firstUpdated() {
        this.blogPosts = POSTS;
        this.addEventListener('readMore', event => {
            const post = event.detail;
            Router.go(`/blog/posts/${post.id}`);
        });
    }
    async loadBlogCard() {
        await import('./blog-card');
    }
};
BlogPosts.styles = css `
    h2 {
      margin: 20px;
    }
  `;
__decorate([
    property({ type: Array })
], BlogPosts.prototype, "blogPosts", void 0);
BlogPosts = __decorate([
    customElement('lit-blog-posts')
], BlogPosts);
export { BlogPosts };
//# sourceMappingURL=blog-posts.js.map