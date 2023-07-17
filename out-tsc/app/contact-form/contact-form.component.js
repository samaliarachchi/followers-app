import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ContactFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First name is required ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Min length is ", _r3.errors["minlength"].requiredLength, " characters ");
} }
function ContactFormComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First Name doesn't match the pattern ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, ContactFormComponent_div_10_div_1_Template, 2, 0, "div", 4);
    i0.ɵɵtemplate(2, ContactFormComponent_div_10_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵtemplate(3, ContactFormComponent_div_10_div_3_Template, 2, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors["pattern"]);
} }
function ContactFormComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const method_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", method_r11.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(method_r11.name);
} }
function ContactFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "label");
    i0.ɵɵelement(2, "input", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rmethod_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", rmethod_r12.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", rmethod_r12.name, " ");
} }
export class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            { id: 1, name: 'Email' },
            { id: 2, name: 'Phone' },
            { id: 3, name: 'Whatsapp' },
            { id: 4, name: 'Address' }
        ];
        this.radioMethods = [
            { id: 1, name: 'Yes' },
            { id: 2, name: 'No' },
            { id: 3, name: 'May be' }
        ];
    }
    log(x) { console.log(x); }
    submit(f) {
        console.log(f);
    }
    static { this.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], decls: 33, vars: 8, consts: [[3, "ngSubmit"], ["f", "ngForm"], ["ngModelGroup", "contact"], ["contact", "ngModelGroup"], [4, "ngIf"], [1, "form-group"], ["for", "firstName"], ["required", "", "minlength", "4", "maxlength", "10", "pattern", "banana", "ngModel", "", "name", "firstName", "id", "firstName", "type", "text", 1, "form-control", 3, "change"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "comment"], ["ngModel", "", "id", "comment", "cols", "30", "rows", "10", 1, "form-control", 3, "change"], ["comment", "ngModel"], [1, "checkbox"], ["type", "checkbox", "ngModel", "", "name", "isSubscribed"], ["for", "contactMethod"], ["ngModel", "", "name", "contactMethod", "id", "contactMethod", "required", "", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "radio", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [3, "value"], [1, "radio"], ["ngModel", "", "type", "radio", "name", "radioMethod", 3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r13 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r13); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.submit(_r0)); });
            i0.ɵɵelementStart(2, "div", 2, 3);
            i0.ɵɵtemplate(4, ContactFormComponent_div_4_Template, 1, 0, "div", 4);
            i0.ɵɵelementStart(5, "div", 5)(6, "label", 6);
            i0.ɵɵtext(7, "First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 7, 8);
            i0.ɵɵlistener("change", function ContactFormComponent_Template_input_change_8_listener() { i0.ɵɵrestoreView(_r13); const _r3 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.log(_r3)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, ContactFormComponent_div_10_Template, 4, 3, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 5)(12, "label", 10);
            i0.ɵɵtext(13, "comment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "textarea", 11, 12);
            i0.ɵɵlistener("change", function ContactFormComponent_Template_textarea_change_14_listener() { i0.ɵɵrestoreView(_r13); const _r5 = i0.ɵɵreference(15); return i0.ɵɵresetView(ctx.log(_r5)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 13)(17, "label");
            i0.ɵɵelement(18, "input", 14);
            i0.ɵɵtext(19, " Subscribe to mailing list ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 5)(21, "label", 15);
            i0.ɵɵtext(22, "Contact Method");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "select", 16)(24, "option", 17);
            i0.ɵɵtext(25, "Select contact method");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, ContactFormComponent_option_26_Template, 2, 2, "option", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(27, ContactFormComponent_div_27_Template, 4, 2, "div", 19);
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29);
            i0.ɵɵpipe(30, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "button", 20);
            i0.ɵɵtext(32, "Submit");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            const _r1 = i0.ɵɵreference(3);
            const _r3 = i0.ɵɵreference(9);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", _r1.valid);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", _r3.touched && !_r3.valid);
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngForOf", ctx.contactMethods);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.radioMethods);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(30, 6, _r0.value), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !_r0.valid);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i1.JsonPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{ selector: 'contact-form', template: "<form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n    <div ngModelGroup=\"contact\" #contact=\"ngModelGroup\">\n        <div *ngIf=\"contact.valid\"></div>\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input\n                required\n                minlength=\"4\" \n                maxlength=\"10\" \n                pattern=\"banana\" \n                ngModel \n                name=\"firstName\" \n                #firstName=\"ngModel\" \n                (change)=\"log(firstName)\" \n                id=\"firstName\" \n                type=\"text\" \n                class=\"form-control\">\n            <div class=\"alert alert-danger\" \n                *ngIf=\"firstName.touched && !firstName.valid\">\n                <div *ngIf=\"firstName.errors['required']\">\n                    First name is required\n                </div>\n                <div *ngIf=\"firstName.errors['minlength']\">\n                    Min length is {{ firstName.errors['minlength'].requiredLength}} characters\n                </div>\n                <div *ngIf=\"firstName.errors['pattern']\">\n                    First Name doesn't match the pattern\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"comment\">comment</label>\n        <textarea \n            ngModel \n            id=\"comment\" \n            #comment=\"ngModel\" \n            (change)=\"log(comment)\" \n            cols=\"30\" \n            rows=\"10\" \n            class=\"form-control\"></textarea>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" ngModel name=\"isSubscribed\">\n            Subscribe to mailing list\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"contactMethod\">Contact Method</label>\n        <select \n            ngModel \n            name=\"contactMethod\" \n            id=\"contactMethod\" \n            class=\"form-control\"\n            required=\"\">\n                <option value=\"\">Select contact method</option>\n                <option \n                *ngFor=\"let method of contactMethods\" \n                [value]=\"method.id\">{{ method.name }}</option>\n        </select>\n    </div>  \n    <div  *ngFor=\"let rmethod of radioMethods\" class=\"radio\">\n        <label>\n            <input ngModel type=\"radio\" name=\"radioMethod\" [value]=\"rmethod.id\">\n            {{ rmethod.name }}\n        </label>\n    </div>\n    <p>\n        {{f.value | json}}\n    </p>\n    <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n</form>" }]
    }], null, null); })();
//# sourceMappingURL=contact-form.component.js.map