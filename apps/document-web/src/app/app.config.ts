import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DocumentDbService } from './db/document-db.service';
import { appRoutesFactory } from './app-routes.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutesFactory(), withComponentInputBinding()),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(DocumentDbService, { delay: 1000 })
    ),
  ],
};
