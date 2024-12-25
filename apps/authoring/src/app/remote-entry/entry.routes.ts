import { Route } from '@angular/router';
// import { loadRemoteModule, setRemoteDefinitions } from '@nx/angular/mf';

import { RemoteEntryComponent } from './entry.component';
// import { environment } from '../../environments/environment';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    // children: [
    //   {
    //     path: '',
    //     /*** Static module federation */
    //     // loadChildren: () =>
    //     //   import('editor/Routes').then((m) => m!.remoteRoutes),

    //     /*** Dynamic module federation with latest syntax */
    //     // loadChildren: () =>
    //     //  loadRemote('editor/Routes').then((m: any) => m.remoteRoutes),

    //     /*** Load remote component instead of module*/
    //     loadComponent: () => {
    //       setRemoteDefinitions({ editor: environment.editor });
    //       return loadRemoteModule('editor', './CkEditor').then(
    //         (m) => m.EditorComponent
    //       );
    //     },
    //   },
    // ],
  },
];
