import { Component, inject } from '@angular/core';
import { HoennServiceService } from '../hoenn-service.service';

@Component({
  selector: 'app-hoenn-leaders',
  imports: [],
  templateUrl: './hoenn-leaders.component.html',
  styleUrl: './hoenn-leaders.component.css'
})
export class HoennLeadersComponent {
    hoennService = inject(HoennServiceService);
}
