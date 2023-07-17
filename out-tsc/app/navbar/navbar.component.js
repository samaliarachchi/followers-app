import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return { page: 1, order: "newest" }; };
export class NavbarComponent {
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["navbar"]], decls: 13, vars: 2, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active current"], ["routerLink", "/"], ["routerLink", "/followers", 3, "queryParams"], ["routerLink", "/posts"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
            i0.ɵɵtext(6, "Home");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "li", 4)(8, "a", 6);
            i0.ɵɵtext(9, "Followers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "li", 4)(11, "a", 7);
            i0.ɵɵtext(12, "Posts");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [i1.RouterLink, i1.RouterLinkActive] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'navbar', template: "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active current\">\n                    <a routerLink=\"/\" >Home</a>\n                </li>\n                <li routerLinkActive=\"active current\">\n                    <a \n                        routerLink=\"/followers\" \n                        [queryParams]=\"{page: 1, order: 'newest'}\">Followers</a>\n                </li>\n                <li routerLinkActive=\"active current\">\n                    <a routerLink=\"/posts\">Posts</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>" }]
    }], null, null); })();
//# sourceMappingURL=navbar.component.js.map