import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./navbar/navbar.component";
export class AppComponent {
    constructor() {
        this.title = 'Sajith Samaliarachchi';
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "navbar")(1, "router-outlet");
        } }, dependencies: [i1.RouterOutlet, i2.NavbarComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<!-- <input type=\"text\" [(ngModel)]=\"title\">\n<br>\n{{ title | titleCase }}\n\n<courses></courses>\n<authors></authors> -->\n<!-- <favorite></favorite> -->\n\n<!-- <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChanged($event)\"></favorite> -->\n<!-- <app-panel>\n    <div class=\"heading\">Heading</div>\n    <div class=\"body\">\n        <h2>Body</h2>\n        <p>Some content here...</p>\n    </div>\n</app-panel> -->\n<!-- <like\n    [likesCount]=\"tweet.likesCount\"\n    [isActive]=\"tweet.isLiked\"\n    ></like> -->\n<!-- <contact-form></contact-form> -->\n<!-- <app-course></app-course> -->\n<!-- <sign-up></sign-up> -->\n<!-- <new-course-form></new-course-form>\n -->\n <!-- <change-password></change-password> -->\n <!-- <app-posts></app-posts> -->\n <!-- <github-followers></github-followers> -->\n <navbar></navbar> \n <router-outlet></router-outlet>" }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map