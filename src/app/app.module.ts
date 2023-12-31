import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './component/banner/banner.component';
import { ButtonEventComponent } from './component/button-event/button-event.component';
import { FormsModule } from '@angular/forms';
import { CarrouselComponent } from './component/carrousel/carrousel.component';
import { NavComponent } from './component/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ButtonEventComponent,
    CarrouselComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  }

