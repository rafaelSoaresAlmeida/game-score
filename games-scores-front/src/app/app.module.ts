import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { SpaceInvadersComponent } from './games/space-invaders/space-invaders.component';
import { TetrisComponent } from './games/tetris/tetris.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SpaceInvadersComponent, TetrisComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
