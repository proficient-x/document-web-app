import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  // { path: 'editor', component: RemoteEntryComponent },
  // { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: '', component: RemoteEntryComponent },
];
