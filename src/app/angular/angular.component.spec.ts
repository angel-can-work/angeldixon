import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CalculatorComponent } from '../calculator/calculator.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { TodoComponent } from '../todo/todo.component';

import { AngularComponent } from './angular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AngularComponent,
        CalculatorComponent,
        TodoComponent,
        ChatbotComponent],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatInputModule,
        MatCheckboxModule,
        MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
