import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function ChangePasswordComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Old password is required. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Old password is invalid. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, ChangePasswordComponent_div_5_div_1_Template, 2, 0, "div", 9);
    i0.ɵɵtemplate(2, ChangePasswordComponent_div_5_div_2_Template, 2, 0, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.oldPassword.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.oldPassword.errors["invalidOldPassword"]);
} }
function ChangePasswordComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " New password is required. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, ChangePasswordComponent_div_10_div_1_Template, 2, 0, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.newPassword.errors["required"]);
} }
function ChangePasswordComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Confirm password is required. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, " Password do not match. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, ChangePasswordComponent_div_15_div_1_Template, 2, 0, "div", 9);
    i0.ɵɵtemplate(2, ChangePasswordComponent_div_15_div_2_Template, 2, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.confirmPassword.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.confirmPassword.valid && ctx_r2.form.invalid && ctx_r2.form.errors["passwordsShouldMatch"]);
} }
export class ChangePasswordComponent {
    constructor(fb) {
        this.form = fb.group({
            oldPassword: ['',
                Validators.required,
                PasswordValidators.validOldPassword
            ],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: PasswordValidators.passwordsShouldMatch
        });
    }
    get oldPassword() {
        return this.form.get('oldPassword');
    }
    get newPassword() {
        return this.form.get('newPassword');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    static { this.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["change-password"]], decls: 18, vars: 4, consts: [[3, "formGroup"], [1, "form-group"], ["for", ""], ["formControlName", "oldPassword", "type", "password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "newPassword", "type", "password", 1, "form-control"], ["formControlName", "confirmPassword", "type", "password", 1, "form-control"], [1, "btn", "btn-primary"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "label", 2);
            i0.ɵɵtext(3, "Old Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 3);
            i0.ɵɵtemplate(5, ChangePasswordComponent_div_5_Template, 3, 2, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1)(7, "label", 2);
            i0.ɵɵtext(8, "New Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 5);
            i0.ɵɵtemplate(10, ChangePasswordComponent_div_10_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 1)(12, "label", 2);
            i0.ɵɵtext(13, "Confirm Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 6);
            i0.ɵɵtemplate(15, ChangePasswordComponent_div_15_Template, 3, 2, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 7);
            i0.ɵɵtext(17, "Change Password");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.oldPassword.touched && ctx.oldPassword.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.newPassword.touched && ctx.newPassword.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.confirmPassword.touched && ctx.confirmPassword.invalid);
        } }, dependencies: [i2.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordComponent, [{
        type: Component,
        args: [{ selector: 'change-password', template: "<form [formGroup]=\"form\">\n    <div class=\"form-group\">\n        <label for=\"\">Old Password</label>\n        <input formControlName=\"oldPassword\" type=\"password\" class=\"form-control\">\n        <div \n            *ngIf=\"oldPassword.touched && oldPassword.invalid\"\n            class=\"alert alert-danger\">\n            <div \n                *ngIf=\"oldPassword.errors['required']\">\n                Old password is required.\n            </div>\n            <div \n                *ngIf=\"oldPassword.errors['invalidOldPassword']\">\n                Old password is invalid.\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">New Password</label>\n        <input formControlName=\"newPassword\" type=\"password\" class=\"form-control\">\n        <div \n            *ngIf=\"newPassword.touched && newPassword.invalid\"\n            class=\"alert alert-danger\">\n            <div \n                *ngIf=\"newPassword.errors['required']\">\n                New password is required.\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">Confirm Password</label>\n        <input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\">\n        <div \n            *ngIf=\"confirmPassword.touched && confirmPassword.invalid\"\n            class=\"alert alert-danger\">\n            <div \n                *ngIf=\"confirmPassword.errors['required']\">\n                Confirm password is required.\n            </div>\n            <div *ngIf=\"confirmPassword.valid && form.invalid && form.errors['passwordsShouldMatch']\" class=\"alert alert-danger\">\n                Password do not match.\n            </div>\n        </div>\n    </div>\n    <button class=\"btn btn-primary\">Change Password</button>\n</form>" }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=change-password.component.js.map