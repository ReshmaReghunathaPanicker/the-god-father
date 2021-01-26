import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GodFatherComponent } from './god-father/god-father.component';
import { GodFatherDetailComponent } from './god-father-detail/god-father-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GodFatherComponent,
    GodFatherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
