import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function SignUpComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " The username or password is invalid. ");
    i0.ɵɵelementEnd();
} }
function SignUpComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking for Uniqueness...");
    i0.ɵɵelementEnd();
} }
function SignUpComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username is required ");
    i0.ɵɵelementEnd();
} }
function SignUpComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Username should be minimum ", ctx_r5.username.errors["minlength"].requiredLength, " ");
} }
function SignUpComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username cannot contain space ");
    i0.ɵɵelementEnd();
} }
function SignUpComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username is already taken. ");
    i0.ɵɵelementEnd();
} }
function SignUpComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, SignUpComponent_div_7_div_1_Template, 2, 0, "div", 5);
    i0.ɵɵtemplate(2, SignUpComponent_div_7_div_2_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(3, SignUpComponent_div_7_div_3_Template, 2, 0, "div", 5);
    i0.ɵɵtemplate(4, SignUpComponent_div_7_div_4_Template, 2, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors["cannotContainSpace"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors["shouldBeUnique"]);
} }
function SignUpComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " Password is required ");
    i0.ɵɵelementEnd();
} }
export class SignUpComponent {
    constructor() {
        this.form = new FormGroup({
            username: new FormControl('', Validators.required, UsernameValidators.shouldBeUnique),
            //     username: new FormControl('', [
            //       Validators.required,
            //       Validators.minLength(3),
            //       UsernameValidators.cannotContainSpace,
            //       UsernameValidators.shouldBeUnique
            // ]),
            password: new FormControl('', Validators.required)
        });
    }
    login() {
        this.form.setErrors({
            invalidLogin: true
        });
    }
    get username() {
        return this.form.get('username');
    }
    get password() {
        return this.form.get('password');
    }
    static { this.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignUpComponent, selectors: [["sign-up"]], decls: 15, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "username"], ["formControlName", "username", "id", "username", "type", "text", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function SignUpComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
            i0.ɵɵtemplate(1, SignUpComponent_div_1_Template, 2, 0, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "label", 3);
            i0.ɵɵtext(4, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "input", 4);
            i0.ɵɵtemplate(6, SignUpComponent_div_6_Template, 2, 0, "div", 5);
            i0.ɵɵtemplate(7, SignUpComponent_div_7_Template, 5, 4, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "label", 6);
            i0.ɵɵtext(10, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 7);
            i0.ɵɵtemplate(12, SignUpComponent_div_12_Template, 2, 0, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 8);
            i0.ɵɵtext(14, "Submit");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.form.errors);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.username.pending);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.username.touched && ctx.username.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.password.touched && ctx.password.invalid);
        } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignUpComponent, [{
        type: Component,
        args: [{ selector: 'sign-up', template: "<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n    <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\n        The username or password is invalid.\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n            formControlName=\"username\"\n            id=\"username\" \n            type=\"text\" \n            class=\"form-control\">\n            <div *ngIf=\"username.pending\">Checking for Uniqueness...</div>\n            <div \n            *ngIf=\"username.touched && \n            username.invalid\"\n            class=\"alert alert-danger\">\n                <div *ngIf=\"username.errors['required']\">\n                    Username is required\n                </div>\n                <div *ngIf=\"username.errors['minlength']\">\n                    Username should be minimum {{ username.errors['minlength'].requiredLength }}\n                </div>\n                <div *ngIf=\"username.errors['cannotContainSpace']\">\n                        Username cannot contain space\n                </div>\n                <div *ngIf=\"username.errors['shouldBeUnique']\">\n                    Username is already taken.\n                </div>\n            </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n            formControlName=\"password\"\n            id=\"password\" \n            type=\"text\" \n            class=\"form-control\">\n            <div \n            *ngIf=\"password.touched && \n            password.invalid\"\n            class=\"alert alert-danger\">\n            Password is required\n            </div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n</form>\n" }]
    }], null, null); })();
//# sourceMappingURL=sign-up.component.js.map