import { Route } from '@angular/router';
import { loadRemoteModule, setRemoteDefinitions } from '@nx/angular/mf';
import { environment } from '../environments/environment';

export const appRoutes: Route[] = [
  {
    path: 'authoring/:docId',
    // loadChildren: () => import('authoring/Routes').then((m) => m!.remoteRoutes),
    loadChildren: () => {
      setRemoteDefinitions({ authoring: environment.authoring });
      return loadRemoteModule('authoring', './Routes').then(
        (m) => m.remoteRoutes
      );
    },
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/dashboard/document-list.component').then(
        (m) => m.DocumentListComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
