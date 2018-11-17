import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistEditComponent } from './stylist-edit.component';

describe('StylistEditComponent', () => {
  let component: StylistEditComponent;
  let fixture: ComponentFixture<StylistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
