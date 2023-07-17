import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class CoursesComponent {
    constructor() {
        this.email = "sajith.rangana@csn.edu.pk";
    }
    onkeyUp() {
        console.log(this.email);
    }
    static { this.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoursesComponent, selectors: [["courses"]], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange", "keyup.enter"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function CoursesComponent_Template_input_ngModelChange_0_listener($event) { return ctx.email = $event; })("keyup.enter", function CoursesComponent_Template_input_keyup_enter_0_listener() { return ctx.onkeyUp(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.email);
        } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoursesComponent, [{
        type: Component,
        args: [{
                selector: 'courses',
                template: `
    <input [(ngModel)]="email" (keyup.enter)="onkeyUp()" />
    `
            }]
    }], null, null); })();
//# sourceMappingURL=courses.components.js.map