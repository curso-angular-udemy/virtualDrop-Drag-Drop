import { Routes, RouterModule } from '@angular/router';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';

const routes: Routes = [
  { path: 'virtualScroll', component: VirtualComponent },
  { path: 'drag', component: DragComponent },
  { path: 'paises', component: PaisesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'virtualScroll' },
];

export const AppRoutes = RouterModule.forRoot(routes);
