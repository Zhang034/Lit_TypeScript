import { __decorate } from "tslib";
import { LitElement, html, customElement, property } from 'lit-element';
let About = class About extends LitElement {
    constructor() {
        super(...arguments);
        // static properties = {
        //   num1: {
        //     type: Number,
        //     reflect: true
        //   }
        // }
        this.formData = { num1: 0, num2: 0 };
        this.sum = 0;
    }
    render() {
        return html `
    <form action="">
    <input type="text" .value=${this.formData.num1} @input=${(e) => { this.formData.num1 = Number(e.target.value); }}>
    <input type="text" .value=${this.formData.num2} @input=${(e) => { this.formData.num2 = Number(e.target.value); }}>
    </form>
    <button @click=${this.addNum}>相加</button>
    <button @click=${this.clean}>清除</button>
    <p>结果:${this.sum}</p>
    `;
    }
    addNum() {
        this.sum = this.formData.num1 + this.formData.num2;
    }
    clean() {
        this.formData.num1 = 0;
        this.formData.num2 = 0;
        this.sum = 0;
    }
};
__decorate([
    property({ type: Object })
], About.prototype, "formData", void 0);
__decorate([
    property({ type: Number })
], About.prototype, "sum", void 0);
About = __decorate([
    customElement('lit-about')
], About);
export { About };
//# sourceMappingURL=about.js.map