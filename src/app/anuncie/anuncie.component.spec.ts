import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncieComponent } from './anuncie.component';

describe('AnuncieComponent', () => {
  let component: AnuncieComponent;
  let fixture: ComponentFixture<AnuncieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
