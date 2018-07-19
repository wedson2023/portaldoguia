import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheNoticiasComponent } from './detalhe-noticias.component';

describe('DetalheNoticiasComponent', () => {
  let component: DetalheNoticiasComponent;
  let fixture: ComponentFixture<DetalheNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
