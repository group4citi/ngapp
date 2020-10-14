import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceATradeComponent } from './place-atrade.component';

describe('PlaceATradeComponent', () => {
  let component: PlaceATradeComponent;
  let fixture: ComponentFixture<PlaceATradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceATradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceATradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
