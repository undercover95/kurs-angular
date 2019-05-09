import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabinderComponent } from './databinder.component';

describe('DatabinderComponent', () => {
  let component: DatabinderComponent;
  let fixture: ComponentFixture<DatabinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
