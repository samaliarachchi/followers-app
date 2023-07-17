import { TestBed } from '@angular/core/testing';
import { GithubFollowersComponent } from './github-followers.component';
describe('GithubFollowersComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GithubFollowersComponent]
        });
        fixture = TestBed.createComponent(GithubFollowersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=github-followers.component.spec.js.map