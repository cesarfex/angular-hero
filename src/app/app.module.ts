import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Passo 1) Importe o FormsModule (javascript) 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Passo 2) Importe o FormsModule (angular)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
