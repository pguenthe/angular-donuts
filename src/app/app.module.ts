import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DonutListComponent } from './donut-list/donut-list.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonutListComponent,
    DonutDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
