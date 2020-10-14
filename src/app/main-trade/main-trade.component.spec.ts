import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTradeComponent } from './main-trade.component';

describe('MainTradeComponent', () => {
  let component: MainTradeComponent;
  let fixture: ComponentFixture<MainTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
