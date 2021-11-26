import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/containers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const CORE_MODULES = [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule];

const CONTAINERS = [HeaderComponent];

@NgModule({
  declarations: [AppComponent, CONTAINERS],
  imports: [CORE_MODULES],
  bootstrap: [AppComponent]
})
export class AppModule {}
