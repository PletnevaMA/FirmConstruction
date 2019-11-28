import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OobjectComponent } from './oobject.component';

describe('OobjectComponent', () => {
  let component: OobjectComponent;
  let fixture: ComponentFixture<OobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
