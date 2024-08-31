import { Component } from '@angular/core';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent],
  template: `
  <div class="border rounded-3 p-3">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h2 class="my-0 fw-normal">Sala de chat</h2>
        </div>
        
        <div class="card-body">
          <h4> coversacion </h4>
          @for(mensaje of mensajes; track mensaje.usuario){
          <div class="mt-3">
          <strong>{{ mensaje.usuario }}:</strong> {{ mensaje.texto }}
          </div>
          }
        </div>

      </div>
      <div class="row">
      @for (user of usuarios; track $index) {
        
        <div  class="col-6">
          <app-mensaje
            [usuario]="user"
            (mensajeEnviado)="agregarMensaje($event)"
          >
          </app-mensaje>
        </div>
      
      }
      </div>
        
      
      
    </div>
  ` ,
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  usuarios = ['Pepe', 'maria', 'no se quien'];

  mensajes: { usuario: string; texto: string }[] = [];
  agregarMensaje(mensaje: { usuario: string; texto: string }) {
    this.mensajes.push(mensaje);
  }
}
