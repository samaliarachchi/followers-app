import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
export class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }
    create(resource) {
        // return throwError(new AppError());
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .pipe(catchError(this.handleError));
    }
    delete(id) {
        return throwError(new AppError());
        // return this.http.delete<any>(this.url + '/' + id)
        //   .pipe(catchError(this.handleError));
    }
    handleError(error) {
        if (error.status === 400)
            return throwError(new BadInput(error));
        if (error.status === 404)
            return throwError(new NotFoundError());
        return throwError(new AppError(error));
    }
    static { this.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject('API_URL'), i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['API_URL']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data.service.js.map