import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LikeComponent {
    onClick() {
        this.likesCount += (this.isActive) ? -1 : 1;
        this.isActive = !this.isActive;
    }
    static { this.ɵfac = function LikeComponent_Factory(t) { return new (t || LikeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LikeComponent, selectors: [["like"]], inputs: { likesCount: "likesCount", isActive: "isActive" }, decls: 3, vars: 3, consts: [[1, "glyphicon", "glyphicon-heart", 3, "click"]], template: function LikeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵlistener("click", function LikeComponent_Template_span_click_0_listener() { return ctx.onClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("highlighted", ctx.isActive);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.likesCount);
        } }, styles: [".glyphicon[_ngcontent-%COMP%] {\r\n     color: #ccc;\r\n     cursor: pointer;\r\n}\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    color: deeppink;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LikeComponent, [{
        type: Component,
        args: [{ selector: 'like', template: "<span class=\"glyphicon glyphicon-heart\"\n[class.highlighted]=\"isActive\"\n(click)=\"onClick()\">\n</span>\n\n<span>{{ likesCount }}</span>", styles: ["\r\n.glyphicon {\r\n     color: #ccc;\r\n     cursor: pointer;\r\n}\r\n\r\n.highlighted {\r\n    color: deeppink;\r\n}"] }]
    }], null, { likesCount: [{
            type: Input,
            args: ['likesCount']
        }], isActive: [{
            type: Input,
            args: ['isActive']
        }] }); })();
//# sourceMappingURL=like.component.js.map