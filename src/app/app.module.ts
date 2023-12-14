import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { HereMapComponent } from './components/here-map/here-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapViewerComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
