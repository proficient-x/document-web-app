import { Route, Router } from '@angular/router';

import { LoadMfeUtils, IMfeConfig } from '@dwa/core/load-mfe';

import { getRemoteUrl, ROUTE_CONFIG } from '@dwa/core';

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

const remoteRoutes: IMfeConfig[] = [
  {
    remotePath: 'authoring/:docId',
    remoteEntryUrl: getRemoteUrl(ROUTE_CONFIG.AUTHORING),
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
