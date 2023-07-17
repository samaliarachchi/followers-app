import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { EmailService } from './email.service';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            CoursesService,
            AuthorsService,
            EmailService,
            TitleCasePipe,
            PostService,
            GithubFollowersService,
            { provide: ErrorHandler, useClass: AppErrorHandler }
        ], imports: [BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientXsrfModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'followers/:userid/:username', component: GithubprofileComponent },
                { path: 'followers', component: GithubFollowersComponent },
                { path: 'posts', component: PostsComponent },
                { path: '**', component: NotfoundComponent },
            ])] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    CoursesComponent,
                    CourseComponent,
                    AuthorsComponent,
                    FavoriteComponent,
                    TitleCasePipe,
                    PanelComponent,
                    LikeComponent,
                    ContactFormComponent,
                    SignUpComponent,
                    NewCourseFormComponent,
                    ChangePasswordComponent,
                    PostsComponent,
                    GithubFollowersComponent,
                    NavbarComponent,
                    HomeComponent,
                    GithubprofileComponent,
                    NotfoundComponent
                ],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    AppRoutingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientXsrfModule,
                    RouterModule.forRoot([
                        { path: '', component: HomeComponent },
                        { path: 'followers/:userid/:username', component: GithubprofileComponent },
                        { path: 'followers', component: GithubFollowersComponent },
                        { path: 'posts', component: PostsComponent },
                        { path: '**', component: NotfoundComponent },
                    ])
                ],
                providers: [
                    CoursesService,
                    AuthorsService,
                    EmailService,
                    TitleCasePipe,
                    PostService,
                    GithubFollowersService,
                    { provide: ErrorHandler, useClass: AppErrorHandler }
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        CoursesComponent,
        CourseComponent,
        AuthorsComponent,
        FavoriteComponent,
        TitleCasePipe,
        PanelComponent,
        LikeComponent,
        ContactFormComponent,
        SignUpComponent,
        NewCourseFormComponent,
        ChangePasswordComponent,
        PostsComponent,
        GithubFollowersComponent,
        NavbarComponent,
        HomeComponent,
        GithubprofileComponent,
        NotfoundComponent], imports: [BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientXsrfModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map