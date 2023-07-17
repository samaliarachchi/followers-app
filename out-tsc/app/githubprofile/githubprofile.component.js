import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return ["/followers", 1234]; };
export class GithubprofileComponent {
    // constructor(private route: ActivatedRoute){
    // }
    // ngOnInit(){
    //   // this.route.paramMap
    //   // .subscribe(params =>{
    //   //   let userid = +params.get('userid');
    //   //   console.log(userid);
    //   // });
    //   let id = this.route.snapshot.paramMap.get('userid');
    //   console.log(id);
    // }
    constructor(router) {
        this.router = router;
    }
    submit() {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest' }
        });
    }
    static { this.ɵfac = function GithubprofileComponent_Factory(t) { return new (t || GithubprofileComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubprofileComponent, selectors: [["githubprofile"]], decls: 4, vars: 2, consts: [[1, "btn", "btn-primary", 3, "routerLink"]], template: function GithubprofileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "githubprofile works!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵtext(3, "Next");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [i1.RouterLink] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubprofileComponent, [{
        type: Component,
        args: [{ selector: 'githubprofile', template: "<p>githubprofile works!</p>\n<button [routerLink]=\"['/followers', 1234]\" class=\"btn btn-primary\">Next</button>" }]
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=githubprofile.component.js.map