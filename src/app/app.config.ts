import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideTanStackQuery,
  withDevtools,
} from '@tanstack/angular-query-experimental';
import { QueryClient } from '@tanstack/query-core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection(),
    provideTanStackQuery(new QueryClient(), withDevtools()),
  ],
};
