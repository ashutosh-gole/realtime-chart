import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredChartComponent } from './filtered-chart.component';

describe('FilteredChartComponent', () => {
  let component: FilteredChartComponent;
  let fixture: ComponentFixture<FilteredChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
