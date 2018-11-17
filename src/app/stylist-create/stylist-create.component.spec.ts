import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistCreateComponent } from './stylist-create.component';

describe('StylistCreateComponent', () => {
  let component: StylistCreateComponent;
  let fixture: ComponentFixture<StylistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
