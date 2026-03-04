import { Component, inject } from '@angular/core';
import { KantoServiceService } from '../kanto-service.service';

@Component({
  selector: 'app-kanto-leaders',
  imports: [],
  templateUrl: './kanto-leaders.component.html',
  styleUrl: './kanto-leaders.component.css'
})
export class KantoLeadersComponent {
   kantoService = inject(KantoServiceService);
}
