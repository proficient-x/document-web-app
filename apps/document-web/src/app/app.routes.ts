import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'authoring/:docId',
    loadChildren: () => import('authoring/Routes').then((m) => m!.remoteRoutes),
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
