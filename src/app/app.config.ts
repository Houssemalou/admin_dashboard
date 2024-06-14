import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpTokenService } from './services/interceptor/http-token.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()),HttpClient, provideHttpClient(), provideAnimationsAsync(),provideNativeDateAdapter(),BrowserModule,
  BrowserAnimationsModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenService,
    multi: true
  } ]
};
