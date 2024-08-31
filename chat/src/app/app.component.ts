import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje.component';
import { SalaComponent } from "./sala/sala.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajeComponent, SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';
}
