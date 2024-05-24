import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LlamadasService } from '../../services/llamadas.service';
import { FiltrosComponent } from '../filtros/filtros.component';


type User={
  ClaveU: string;
  NombreU: string;
  AppU: string;
  ApmU: string;
  FechaRegistro: Date;
  FechaNac: Date;
  Telefonos: Array<string>,
  Llamadas: Array<any>
}

type Tipo={
  
}


@Component({
  selector: 'app-formulario-llamadas',
  standalone: true,
  imports: [ReactiveFormsModule,FiltrosComponent],
  templateUrl: './formulario-llamadas.component.html',
  styleUrl: './formulario-llamadas.component.css'
})

export class FormularioLlamadasComponent implements OnInit{
  ///
  public formularioLlamadas!:FormGroup;
  public formuUser!:FormGroup;
  public usuarios:any;
  public usuarioActual = signal<User>({
        ClaveU: '',
        NombreU: '',
        AppU: '',
        ApmU: '',
        FechaRegistro: new Date(),
        FechaNac: new Date(),
        Telefonos: [],
        Llamadas: [],
  });
  public  tipos: any[] = [
    { id: 1, nombre: 'Tipo 1' },
    { id: 2, nombre: 'Tipo 2' },
    { id: 3, nombre: 'Tipo 3' }
  ];


  constructor(
    private formBuilder:FormBuilder,
    private llamadasService:LlamadasService,
  ){
    
  }

  async ngOnInit() {
    this.initForm();
    const dataApi = await this.llamadasService.listarUsuarios();
    const clavesU = dataApi.datos.map((dato:any)=>dato.ClaveU);
    this.usuarios = clavesU;
    console.log(dataApi);
    console.log(clavesU);
    console.log(this.usuarioActual);
  }

  onSubmitCall(){
    if (this.formularioLlamadas.valid) {
      console.log(this.formularioLlamadas.value);
      const { TelefonoUsuario, FechaLlamada, MinutosUtilizados, NumeroMarcado, NombreTipo, CostoXMinuto } = this.formularioLlamadas.value;
      const data = {
        TelefonoUsuario,
        FechaLlamada,
        MinutosUtilizados,
        NumeroMarcado,
        TipoLlamada:{
          NombreTipo,
          CostoXMinuto
        }
      }
      this.llamadasService.agregarLlamada(this.usuarioActual().ClaveU,data);
    }
  }

  async onSubmitUser(){
    if (this.formuUser.valid) {
      const cve = this.formuUser.value.ClaveU;
      console.log(cve);
      const user = await this.llamadasService.traerUsuario(cve);
      this.usuarioActual.set(user);
      console.log(this.usuarioActual());
    }
  }

  initForm(){
    this.formularioLlamadas = this.formBuilder.group({
      TelefonoUsuario: ['', Validators.required],
      FechaLlamada: ['', Validators.required],
      MinutosUtilizados: [0, Validators.required],
      NumeroMarcado: ['', Validators.required],
      NombreTipo: ['', Validators.required],
      CostoXMinuto: [0.0, Validators.required]
    });

    this.formuUser = this.formBuilder.group({
      ClaveU: ['', Validators.required]
    });

  }


}
