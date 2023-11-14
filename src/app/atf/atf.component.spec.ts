import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATFComponent } from './atf.component';

describe('ATFComponent', () => {
  let component: ATFComponent;
  let fixture: ComponentFixture<ATFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ATFComponent]
    });
    fixture = TestBed.createComponent(ATFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
