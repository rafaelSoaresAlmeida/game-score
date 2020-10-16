import { Routes } from '@angular/router';
import { SpaceInvadersComponent } from './games/space-invaders/space-invaders.component';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'spaceInvaders', component: SpaceInvadersComponent },
];
