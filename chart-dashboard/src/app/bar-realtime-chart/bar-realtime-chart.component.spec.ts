import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRealtimeChartComponent } from './bar-realtime-chart.component';

describe('BarRealtimeChartComponent', () => {
  let component: BarRealtimeChartComponent;
  let fixture: ComponentFixture<BarRealtimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarRealtimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarRealtimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
