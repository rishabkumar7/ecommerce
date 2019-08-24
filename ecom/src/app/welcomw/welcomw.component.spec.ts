import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomwComponent } from './welcomw.component';

describe('WelcomwComponent', () => {
  let component: WelcomwComponent;
  let fixture: ComponentFixture<WelcomwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
