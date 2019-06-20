import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorchangesDirective } from './colorchanges.directive';
import { VarService } from './var.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorchangesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
