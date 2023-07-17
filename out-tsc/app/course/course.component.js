import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CourseComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Course name is required ");
    i0.ɵɵelementEnd();
} }
function CourseComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Min length is ", _r1.errors["minlength"].requiredLength, " characters ");
} }
function CourseComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CourseComponent_div_7_div_1_Template, 2, 0, "div", 16);
    i0.ɵɵtemplate(2, CourseComponent_div_7_div_2_Template, 2, 1, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors["minlength"]);
} }
function CourseComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ccat_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", ccat_r8.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ccat_r8.name);
} }
function CourseComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, " Category field is required. ");
    i0.ɵɵelementEnd();
} }
export class CourseComponent {
    constructor() {
        this.courseCategorys = [
            { id: 1, name: 'IT' },
            { id: 2, name: 'Project Management' },
            { id: 3, name: 'Big Data' },
            { id: 4, name: 'Business Intelligence' }
        ];
    }
    submit(f) {
        console.log(f);
    }
    static { this.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseComponent, selectors: [["app-course"]], decls: 26, vars: 7, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "courseName"], ["required", "", "minlength", "4", "ngModel", "", "name", "courseName", "id", "courseName", "type", "text", 1, "form-control"], ["courseName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "courseCategory"], ["ngModel", "", "name", "courseCategory", "id", "courseCategory", "required", "", 1, "form-control"], ["courseCategory", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkbox"], ["type", "checkbox", "ngModel", "", "name", "hasGuarantee"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
            const _r9 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function CourseComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r9); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.submit(_r0.value)); });
            i0.ɵɵelementStart(2, "div", 2)(3, "label", 3);
            i0.ɵɵtext(4, "Course Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "input", 4, 5);
            i0.ɵɵtemplate(7, CourseComponent_div_7_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "label", 7);
            i0.ɵɵtext(10, "Course Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "select", 8, 9)(13, "option", 10);
            i0.ɵɵtext(14, "Select Course Category");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, CourseComponent_option_15_Template, 2, 2, "option", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, CourseComponent_div_16_Template, 2, 0, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 12)(18, "label");
            i0.ɵɵelement(19, "input", 13);
            i0.ɵɵtext(20, " 30-days-money-back-guarantee ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22);
            i0.ɵɵpipe(23, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 14);
            i0.ɵɵtext(25, "Submit");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            const _r1 = i0.ɵɵreference(6);
            const _r3 = i0.ɵɵreference(12);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.courseCategorys);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", _r3.touched && !_r3.valid);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 5, _r0.value), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !_r0.valid);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.NgModel, i2.NgForm, i1.JsonPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseComponent, [{
        type: Component,
        args: [{ selector: 'app-course', template: "<form #f=\"ngForm\" (ngSubmit)=\"submit(f.value)\">\n    <div class=\"form-group\">\n        <label for=\"courseName\">Course Name</label>\n        <input\n            required\n            minlength=\"4\" \n            ngModel \n            name=\"courseName\" \n            #courseName=\"ngModel\" \n            id=\"courseName\" \n            type=\"text\" \n            class=\"form-control\">\n        <div class=\"alert alert-danger\" \n            *ngIf=\"courseName.touched && !courseName.valid\">\n            <div *ngIf=\"courseName.errors['required']\">\n                Course name is required\n            </div>\n            <div *ngIf=\"courseName.errors['minlength']\">\n                Min length is {{ courseName.errors['minlength'].requiredLength}} characters\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"courseCategory\">Course Category</label>\n        <select \n            ngModel \n            name=\"courseCategory\" \n            id=\"courseCategory\" \n            #courseCategory=\"ngModel\" \n            class=\"form-control\"\n            required>\n                <option value=\"\">Select Course Category</option>\n                <option \n                *ngFor=\"let ccat of courseCategorys\" \n                [value]=\"ccat.id\">{{ ccat.name }}</option>\n        </select>\n        <div *ngIf=\"courseCategory.touched && !courseCategory.valid\" class=\"alert alert-danger\">\n            Category field is required.\n        </div>\n    </div> \n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" ngModel name=\"hasGuarantee\">\n            30-days-money-back-guarantee\n        </label>\n    </div>\n    <p>\n        {{f.value | json}}\n    </p>\n    <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n</form>" }]
    }], null, null); })();
//# sourceMappingURL=course.component.js.map