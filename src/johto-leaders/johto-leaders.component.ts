import { Component, inject } from '@angular/core';
import { JohtoServiceService } from '../johto-service.service';
@Component({
  selector: 'app-johto-leaders',
  imports: [],
  templateUrl: './johto-leaders.component.html',
  styleUrl: './johto-leaders.component.css'
})
export class JohtoLeadersComponent {
  johtoService = inject(JohtoServiceService);
}
