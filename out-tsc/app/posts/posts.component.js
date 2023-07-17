import { Component } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { BadInput } from '../common/bad-input';
import * as i0 from "@angular/core";
import * as i1 from "../services/post.service";
import * as i2 from "@angular/common";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updatePost(post_r2)); });
    i0.ɵɵtext(2, "Update");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.deletePost(post_r2)); });
    i0.ɵɵtext(4, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", post_r2.id + " - " + post_r2.userId + " - " + post_r2.title + " - " + post_r2.body, " ");
} }
export class PostsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll()
            .subscribe(response => this.posts = response);
    }
    createPost(input) {
        let post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.create(post)
            .subscribe(response => {
            post['id'] = response.id;
        }, (error) => {
            this.posts.splice(0, 1);
            if (error instanceof BadInput) {
                // this.form.setErrors(error.json());
            }
            else
                throw error;
        });
    }
    updatePost(post) {
        // this.http.put<any>(this.url, JSON.stringify(post))
        this.service.update(post)
            .subscribe(response => {
            console.log(response);
        });
    }
    deletePost(post) {
        // this.http.put<any>(this.url, JSON.stringify(post));
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id)
            .subscribe(response => {
            // console.log(response);
        }, (error) => {
            this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError)
                alert('This post has already been deleted.');
            else
                throw error;
        });
    }
    static { this.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["app-posts"]], decls: 4, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["title", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r6 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.createPost(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 2);
            i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 6, 1, "li", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.posts);
        } }, dependencies: [i2.NgForOf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'app-posts', template: "<input \n    (keyup.enter)=\"createPost(title)\"\n    #title\n    type=\"text\" class=\"form-control\">\n<ul class=\"list-group\">\n    <li \n        *ngFor=\"let post of posts\"\n    class=\"list-group-item\">\n    <button \n        (click)=\"updatePost(post)\"\n        class=\"btn btn-warning btn-sm\">Update</button>\n        <button \n        (click)=\"deletePost(post)\"\n        class=\"btn btn-danger btn-sm\">Delete</button>\n    {{ post.id +' - '+ post.userId +' - '+ post.title +' - '+ post.body}}\n    </li>\n</ul>" }]
    }], function () { return [{ type: i1.PostService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map