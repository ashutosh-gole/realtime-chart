import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FilteredChartComponent } from './filtered-chart/filtered-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarRealtimeChartComponent } from './bar-realtime-chart/bar-realtime-chart.component';
import { PieRealtimeChartComponent } from './pie-realtime-chart/pie-realtime-chart.component';
import { RealChatComponent } from './real-chat/real-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FilteredChartComponent,
    BarChartComponent,
    PieChartComponent,
    BarRealtimeChartComponent,
    PieRealtimeChartComponent,
    RealChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
