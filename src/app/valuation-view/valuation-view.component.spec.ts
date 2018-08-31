import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationViewComponent } from './valuation-view.component';

describe('ValuationViewComponent', () => {
  let component: ValuationViewComponent;
  let fixture: ComponentFixture<ValuationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
