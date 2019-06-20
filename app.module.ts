import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { GardService } from './gard.service';
import { AuthenService } from './authen.service';
import { ResolveeService } from './resolvee.service';

const rconfg: Routes = [{path:'home',component: HomeComponent},
                       {path:'team',component: TeamComponent, resolve:{playersdata:ResolveeService}},
                       {path:'player/:nameof/:source',component: PlayerComponent , canActivate:[GardService]}
                       ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rconfg)
  ],
  providers: [ GardService, AuthenService, ResolveeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
