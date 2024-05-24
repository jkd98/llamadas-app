import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLlamadasComponent } from './formulario-llamadas.component';

describe('FormularioLlamadasComponent', () => {
  let component: FormularioLlamadasComponent;
  let fixture: ComponentFixture<FormularioLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioLlamadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
