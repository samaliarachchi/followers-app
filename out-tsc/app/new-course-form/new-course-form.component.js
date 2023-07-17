import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function NewCourseFormComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("click", function NewCourseFormComponent_li_4_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const topic_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeTopic(topic_r2.value)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", topic_r2.value, " ");
} }
export class NewCourseFormComponent {
    constructor() {
        this.form = new FormGroup({
            topics: new FormArray([])
        });
    }
    addTopic(topic) {
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }
    removeTopic(topic) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }
    get topics() {
        return this.form.get('topics');
    }
    static { this.ɵfac = function NewCourseFormComponent_Factory(t) { return new (t || NewCourseFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewCourseFormComponent, selectors: [["new-course-form"]], decls: 5, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["topic", ""], [1, "list-group"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function NewCourseFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form")(1, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function NewCourseFormComponent_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.addTopic(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ul", 2);
            i0.ɵɵtemplate(4, NewCourseFormComponent_li_4_Template, 2, 1, "li", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.topics.controls);
        } }, dependencies: [i1.NgForOf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewCourseFormComponent, [{
        type: Component,
        args: [{ selector: 'new-course-form', template: "<form>\n    <input \n    type=\"text\"\n    class=\"form-control\"\n    (keyup.enter)=\"addTopic(topic)\" #topic>\n    <ul class=\"list-group\">\n        <li \n            *ngFor=\"let topic of topics.controls\"\n            (click)=\"removeTopic(topic.value)\"\n            class=\"list-group-item\">\n            {{ topic.value }}\n        </li>\n    </ul>\n</form>" }]
    }], null, null); })();
//# sourceMappingURL=new-course-form.component.js.map