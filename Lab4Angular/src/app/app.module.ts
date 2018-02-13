import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ListComponentComponent]
})
export class AppModule {

 }
