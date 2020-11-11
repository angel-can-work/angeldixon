import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { ResumeComponent } from './resume/resume.component';
import { AngularComponent } from './angular/angular.component';
import { JamzComponent } from './jamz/jamz.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ResumeComponent,
    AngularComponent,
    JamzComponent,
    CalculatorComponent,
    TodoComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
