import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { GreeterService } from './greeter.service';
import { reducers } from './reducers';
import { HelloReduxEffects } from './store/hello-redux-effects';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([HelloReduxEffects])
  ],
  providers: [GreeterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
