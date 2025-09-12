import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakeLadderComponent } from './main/snake-ladder/snake-ladder.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnakeLadderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
