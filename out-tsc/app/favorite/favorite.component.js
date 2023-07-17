import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FavoriteComponent {
    constructor() {
        this.change = new EventEmitter();
    }
    ngOnInit() {
    }
    onClick() {
        this.isSelected = !this.isSelected;
        this.change.emit(this.isSelected);
    }
    static { this.ɵfac = function FavoriteComponent_Factory(t) { return new (t || FavoriteComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavoriteComponent, selectors: [["favorite"]], inputs: { isSelected: ["isFavorite", "isSelected"] }, outputs: { change: "change" }, decls: 1, vars: 4, consts: [[1, "glyphicon", "glyphicon-star", 3, "click"]], template: function FavoriteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵlistener("click", function FavoriteComponent_Template_span_click_0_listener() { return ctx.onClick(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("glyphicon-star", ctx.isSelected)("glyphicon-star-empty", !ctx.isSelected);
        } }, styles: [".glyphicon[_ngcontent-%COMP%] {\r\n    color: red;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoriteComponent, [{
        type: Component,
        args: [{ selector: 'favorite', encapsulation: ViewEncapsulation.Emulated, template: "<style></style>\n<span \nclass=\"glyphicon glyphicon-star\"\n[class.glyphicon-star]=\"isSelected\"\n[class.glyphicon-star-empty]=\"!isSelected\"\n(click)=\"onClick()\"\n></span>\n", styles: [".glyphicon {\r\n    color: red;\r\n}"] }]
    }], function () { return []; }, { isSelected: [{
            type: Input,
            args: ['isFavorite']
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=favorite.component.js.map