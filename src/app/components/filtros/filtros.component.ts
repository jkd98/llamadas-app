import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LlamadasService } from '../../services/llamadas.service';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent implements OnInit{
  public formTraerLlamadas!:FormGroup;
  public formFiltrar!:FormGroup;
  public  tipos: any[] = [
    { id: 1, nombre: 'Tipo 1' },
    { id: 2, nombre: 'Tipo 2' },
    { id: 3, nombre: 'Tipo 3' }
  ];
  public resultados:any;

  @Input() user!:any;

  constructor(private formBuilder:FormBuilder, private llamadasService:LlamadasService){

  }

  ngOnInit(): void {
    this.initForm();  
  }

  initForm(){
    this.formTraerLlamadas = this.formBuilder.group({
      TelefonoUsuario: ['', Validators.required]
    });

    this.formFiltrar = this.formBuilder.group({
      ClaveU: [''],
      NombreU: [''],
      NombreTipo: [''],
      TelefonoUsuario: ['']
    });

    this.patchForm();
  }

  patchForm(){
    this.formFiltrar.patchValue({
      ClaveU:this.user.ClaveU,
      NombreU:this.user.NombreU
    })
  }

  async onSubmitTelf(){
      const num = this.formTraerLlamadas.value.TelefonoUsuario;
      const filtrs = this.formFiltrar.value;
      console.log(filtrs);
      //const data = await this.llamadasService.listarLlamadas(this.user.ClaveU);
      
      const data = await this.llamadasService.buscarLlamadas(filtrs)
      this.resultados = data.data;
      console.log(data);
    }
}
