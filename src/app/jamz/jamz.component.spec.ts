import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamzComponent } from './jamz.component';

describe('JamzComponent', () => {
  let component: JamzComponent;
  let fixture: ComponentFixture<JamzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
