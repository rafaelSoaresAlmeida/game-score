import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { SpaceInvadersComponent } from './games/space-invaders/space-invaders.component';
import { TetrisComponent } from './games/tetris/tetris.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './security/login/login.component';
import { LoginService } from './security/login.service';
import { LoginActivate } from './security/logginActivate';
import { RankService } from './games/rank.service';
import { ScoreGridComponent } from './shared/score-grid/score-grid.component';
import { HomeModule } from './home/home..module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpaceInvadersComponent,
    TetrisComponent,
    AboutComponent,
    LoginComponent,
    ScoreGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, LoginActivate, RankService],
  bootstrap: [AppComponent],
})
export class AppModule {}
