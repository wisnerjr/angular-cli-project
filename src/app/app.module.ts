import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule, DataTableModule, SharedModule, ChartModule, DialogModule, ButtonModule, TooltipModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    ChartModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
