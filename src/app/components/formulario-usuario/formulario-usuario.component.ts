import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    


    this.registroForm = this.formBuilder.group({
      ClaveU: ['', Validators.required],
      NombreU: ['', Validators.required],
      AppU: ['', Validators.required],
      ApmU: ['', Validators.required],
      FechaRegistro: ['', Validators.required],
      FechaNac: ['', Validators.required],
      Telefonos: this.formBuilder.array([]),
      Llamadas: this.formBuilder.array([])
    });
  }

  // obtener telefonos
  telefonos():FormArray {
    return this.registroForm.get('Telefonos') as FormArray;
  }

  // agregar telefono
  addTelefono() {
    this.telefonos().push(this.formBuilder.control(''));
  }

  removeTelefono(index: number) {
    this.telefonos().removeAt(index);
  }

  get llamadas() {
    return this.registroForm.get('Llamadas') as FormArray;
  }

  addLlamada() {
    const llamadaForm = this.formBuilder.group({
      TelefonoUsuario: ['', Validators.required],
      FechaLlamada: ['', Validators.required],
      MinutosUtilizados: [0, Validators.required],
      NumeroMarcado: ['', Validators.required],
      ClaveTipoLlamada: this.formBuilder.group({
        NombreTipo: ['', Validators.required],
        CostoXMinuto: [0.0, Validators.required]
      })
    });
    this.llamadas.push(llamadaForm);
  }

  removeLlamada(index: number) {
    this.llamadas.removeAt(index);
  }

  async onSubmit() {
    if (this.registroForm.valid) {
      try {
        const formData = this.registroForm.value;
        console.log(formData);
        //const response = await this.registroLlamadasService.crearRegistroLlamada(formData);
        //console.log('Registro de llamada creado:', response);
        // Reiniciar el formulario después de crear el registro
        this.registroForm.reset();
        // Limpiar los arrays de teléfonos y llamadas
        while (this.telefonos.length) {
          this.telefonos().removeAt(0);
        }
        while (this.llamadas.length) {
          this.llamadas.removeAt(0);
        }
      } catch (error) {
        console.error('Error al crear el registro de llamada', error);
      }
    } else {
      console.error('Formulario no válido');
    }
  }


}
