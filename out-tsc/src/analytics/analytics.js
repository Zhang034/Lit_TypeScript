import { __decorate } from "tslib";
import { LitElement, html, customElement, css } from 'lit-element';
let Analytics = class Analytics extends LitElement {
    render() {
        return html `
      <div class="container">
        <h2>Analytics</h2>
        <slot></slot>
      </div>
    `;
    }
};
Analytics.styles = css `
    .container {
      margin: 20px;
    }
  `;
Analytics = __decorate([
    customElement('lit-analytics')
], Analytics);
export { Analytics };
//# sourceMappingURL=analytics.js.map