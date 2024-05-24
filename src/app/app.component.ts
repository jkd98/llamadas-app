import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { FormularioLlamadasComponent } from './components/formulario-llamadas/formulario-llamadas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioLlamadasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'llamadas-front';
}
