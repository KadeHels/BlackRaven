import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKadeComponent } from './about-kade.component';

describe('AboutKadeComponent', () => {
  let component: AboutKadeComponent;
  let fixture: ComponentFixture<AboutKadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutKadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutKadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
