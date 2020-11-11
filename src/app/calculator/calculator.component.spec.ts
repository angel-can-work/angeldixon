import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [
        MatGridListModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add', () => {
    spyOn(component, 'add').and.callThrough();
    expect(component.add(2, 7)).toEqual(9);
    expect(component.add(12, 47)).toEqual(59);
  });

  it('should subtract', () => {
    spyOn(component, 'subtract').and.callThrough();
    expect(component.subtract(7, 2)).toEqual(5);
    expect(component.subtract(12, 47)).toEqual(-35);
  });

  it('should multiply', () => {
    spyOn(component, 'multiply').and.callThrough();
    expect(component.multiply(2, 7)).toEqual(14);
    expect(component.multiply(12, 47)).toEqual(564);
  });

  it('should divide', () => {
    spyOn(component, 'divide').and.callThrough();
    expect(component.divide(7, 2)).toEqual(3.5);
    expect(component.divide(12, 47)).toEqual(0.2553191489361702);
  });

  it('should add, subtract, multiple, divide based on operation', () => {
    spyOn(component, 'operate').and.callThrough();
    expect(component.operate(2, '+', 7)).toEqual('9');
    expect(component.operate(12, '+', 47)).toEqual('59');
    expect(component.operate(7, '-', 2)).toEqual('5');
    expect(component.operate(2, 'x', 7)).toEqual('14');
    expect(component.operate(7, '/', 2)).toEqual('3.5');
  });
});
