import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('editor/Routes').then((m) => m!.remoteRoutes),
      },
    ],
  },
];
