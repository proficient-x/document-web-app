import { Route } from '@angular/router';

import { DocumentListComponent } from './components/dashboard/document-list.component';

export const appRoutes: Route[] = [
  {
    path: 'authoring',
    loadChildren: () => import('authoring/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: DocumentListComponent,
  },
];
