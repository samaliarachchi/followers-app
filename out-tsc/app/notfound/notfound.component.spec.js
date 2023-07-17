import { TestBed } from '@angular/core/testing';
import { NotfoundComponent } from './notfound.component';
describe('NotfoundComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotfoundComponent]
        });
        fixture = TestBed.createComponent(NotfoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notfound.component.spec.js.map