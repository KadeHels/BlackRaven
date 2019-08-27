import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLibraryComponent } from './picture-library.component';

describe('PictureLibraryComponent', () => {
  let component: PictureLibraryComponent;
  let fixture: ComponentFixture<PictureLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
