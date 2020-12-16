import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { AngularVirtialScrollingCdkComponent } from './angular-virtial-scrolling-cdk/angular-virtial-scrolling-cdk.component';

@NgModule({
  declarations: [AppComponent, EmployeeItemComponent, AngularVirtialScrollingCdkComponent],
  imports: [BrowserModule, AppRoutingModule, ScrollingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
