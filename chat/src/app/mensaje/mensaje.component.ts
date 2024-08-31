import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [FormsModule],
  template: `
 
  
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Usuario: {{ usuario }}</h4>
        </div>
        <div class="card-body">
            <div class="form-group">
                <label>Mensaje</label>
                <textarea class="form-control" [(ngModel)]="mensaje"></textarea>
              </div>
          <button class="btn btn-primary mt-2" (click)="enviarMensaje()">
            Enviar
          </button>
        </div>
      </div>
  `,
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  @Input() usuario!: string;
  @Output() mensajeEnviado = new EventEmitter<{
    usuario: string;
    texto: string;
  }>();

  mensaje: string = ''; 

  enviarMensaje() {
    if (this.mensaje.trim()  && this.mensaje.length > 0) {
      this.mensajeEnviado.emit({ usuario: this.usuario, texto: this.mensaje });
      this.mensaje = '';
    }
  }


}
