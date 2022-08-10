import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TemplateDrivenFormComponent }  from './template.component';
import { UserService } from './user-service';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [     
    BrowserModule,
	  FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
	TemplateDrivenFormComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { } 
