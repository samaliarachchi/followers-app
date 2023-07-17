import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class HomeComponent {
    static { this.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[2, "text-align", "center"], ["width", "300", "src", "", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, " Welcome to ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "img", 1);
            i0.ɵɵelementEnd();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<div style=\"text-align: center;\">\n    <h1>\n        Welcome to <!--{{title}}-->\n    </h1>\n    <img  width=\"300\" src=\"\" alt=\"\">\n</div>\n" }]
    }], null, null); })();
//# sourceMappingURL=home.component.js.map