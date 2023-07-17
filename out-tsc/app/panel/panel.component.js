import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["", 8, "heading"]], [["", 8, "body"]]];
const _c1 = [".heading", ".body"];
export class PanelComponent {
    constructor() { }
    static { this.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["app-panel"]], ngContentSelectors: _c1, decls: 8, vars: 0, consts: [[1, "content", "inner"], [1, "card", "heading"], [1, "card", "body"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd()()()()();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'app-panel', template: "<div class=\"content inner\">\n    <div class=\"card heading\">\n        <div class=\"card body\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <ng-content select=\".heading\"></ng-content>\n                </div>\n                <div class=\"panel-body\">\n                    <ng-content select=\".body\"></ng-content>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=panel.component.js.map