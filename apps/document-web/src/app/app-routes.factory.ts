import { Route, Router } from '@angular/router';

import { LoadMfeUtils, MfeConfig } from '@dwa/core/load-mfe';

import { environment } from '../environments/environment';

export const appRoutes: Route[] = [
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
  {
    path: '**',
    redirectTo: 'home',
  },
];

const remoteRoutes: MfeConfig[] = [
  {
    remotePath: 'authoring/:docId',
    remoteEntryUrl: environment.authoring,
    remoteName: 'authoring',
    exposes: './Routes',
    ngTypeName: 'remoteRoutes',
  },
];

export const dynamicRoutesFactory = (router: Router) => () =>
  new Promise((resolver: any) => {
    router.resetConfig([
      ...LoadMfeUtils.getAllRemoteRoutes(remoteRoutes),
      ...appRoutes,
    ]);
    resolver();
  });
