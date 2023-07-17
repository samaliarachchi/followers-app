import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../authors.service";
import * as i2 from "@angular/common";
function AuthorsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const author_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", author_r1, " ");
} }
export class AuthorsComponent {
    constructor(service) {
        this.authors = service.getAuthors();
    }
    static { this.ɵfac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(i0.ɵɵdirectiveInject(i1.AuthorsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthorsComponent, selectors: [["authors"]], decls: 4, vars: 2, consts: [[4, "ngFor", "ngForOf"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul");
            i0.ɵɵtemplate(3, AuthorsComponent_li_3_Template, 2, 1, "li", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx.authors.length, " Authors");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.authors);
        } }, dependencies: [i2.NgForOf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthorsComponent, [{
        type: Component,
        args: [{ selector: 'authors', template: "<h2>{{ authors.length }} Authors</h2>\n<ul>\n    <li *ngFor=\"let author of authors\">\n        {{ author }}\n    </li>\n</ul>" }]
    }], function () { return [{ type: i1.AuthorsService }]; }, null); })();
//# sourceMappingURL=authors.component.js.map