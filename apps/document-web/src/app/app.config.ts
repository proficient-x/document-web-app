import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  Router,
  withComponentInputBinding,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DocumentDbService } from './db/document-db.service';
import { appRoutes, dynamicRoutesFactory } from './app-routes.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: dynamicRoutesFactory,
      deps: [Router],
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(DocumentDbService, { delay: 1000 })
    ),
  ],
};
