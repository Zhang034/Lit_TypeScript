import { __decorate } from "tslib";
import { LitElement, html, customElement, css, property } from 'lit-element';
let BlogCard = class BlogCard extends LitElement {
    render() {
        var _a, _b, _c;
        return html `
      <div class="blog-card">
        <div class="blog-description">
          <h1>${(_a = this.post) === null || _a === void 0 ? void 0 : _a.title}</h1>
          <h2>${(_b = this.post) === null || _b === void 0 ? void 0 : _b.author}</h2>
          <p>${(_c = this.post) === null || _c === void 0 ? void 0 : _c.description}</p>
          <p class="blog-footer">
            <a class="blog-link" @click="${this.handleClick}">Read More</a>
          </p>
        </div>
      </div>
    `;
    }
    handleClick() {
        this.dispatchEvent(new CustomEvent('readMore', { detail: this.post, composed: true }));
    }
};
BlogCard.styles = css `
    .blog-card {
      margin: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      background: white;
      border-radius: 5px;
      overflow: hidden;
      border-radius: 10px;
    }

    .blog-description {
      padding: 20px;
      background: white;
    }

    .blog-footer {
      text-align: right;
    }

    .blog-link {
      color: #008cba;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      color: #5e5e5e;
      margin-top: 5px;
    }
  `;
__decorate([
    property({ type: Object })
], BlogCard.prototype, "post", void 0);
BlogCard = __decorate([
    customElement('blog-card')
], BlogCard);
export { BlogCard };
//# sourceMappingURL=blog-card.js.map