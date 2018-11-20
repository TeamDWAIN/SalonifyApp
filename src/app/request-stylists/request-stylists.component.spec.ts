import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStylistsComponent } from './request-stylists.component';

describe('RequestStylistsComponent', () => {
  let component: RequestStylistsComponent;
  let fixture: ComponentFixture<RequestStylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestStylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestStylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
