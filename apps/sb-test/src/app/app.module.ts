import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentModule } from '@ml/shared-component';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, SharedComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
