import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthorsService {
    getAuthors() {
        return ["author1", "author2", "author3"];
    }
    static { this.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthorsService, factory: AuthorsService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthorsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=authors.service.js.map