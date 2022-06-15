import { __decorate } from "tslib";
import { LitElement, html, customElement, property } from 'lit-element';
var Period;
(function (Period) {
    Period["day"] = "Day";
    Period["week"] = "Week";
    Period["month"] = "Month";
    Period["year"] = "Year";
})(Period || (Period = {}));
let AnalyticsPeriod = class AnalyticsPeriod extends LitElement {
    constructor() {
        super(...arguments);
        this.period = Period.week;
    }
    render() {
        return html ` <h3>Period: Last ${this.period}</h3> `;
    }
    onAfterEnter(location, commands, router) {
        const period = location.params.period; // path: 'analytics/:period'
        if (period !== undefined) {
            this.period = Period[period] || Period.week;
        }
    }
};
__decorate([
    property({ type: String })
], AnalyticsPeriod.prototype, "period", void 0);
AnalyticsPeriod = __decorate([
    customElement('lit-analytics-period')
], AnalyticsPeriod);
export { AnalyticsPeriod };
//# sourceMappingURL=analytics-period.js.map