import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { MainComponent } from './componants/main/main.component';
import { TableComponent } from './componants/table/table.component';
import { PrintPillComponent } from './componants/print-pill/print-pill.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TableComponent,
    PrintPillComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
