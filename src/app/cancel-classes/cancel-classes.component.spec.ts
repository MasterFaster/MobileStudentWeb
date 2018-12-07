import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelClassesComponent } from './cancel-classes.component';

describe('CancelClassesComponent', () => {
  let component: CancelClassesComponent;
  let fixture: ComponentFixture<CancelClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
