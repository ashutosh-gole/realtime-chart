import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieRealtimeChartComponent } from './pie-realtime-chart.component';

describe('PieRealtimeChartComponent', () => {
  let component: PieRealtimeChartComponent;
  let fixture: ComponentFixture<PieRealtimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieRealtimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieRealtimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
