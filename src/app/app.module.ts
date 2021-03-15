import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from './main/main.module';
import {StoreModule} from '@ngrx/store';
import {LoginModule} from './modals/login/login.module';
import {MainComponentModule} from './components/main-component.module';
import {appReducer} from './state/app.reducer';
import {environment} from '../environments/environment.prod';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({root: appReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Marvel News DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    MainModule,
    LoginModule,
    MainComponentModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
