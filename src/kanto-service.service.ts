import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KantoServiceService {
  private registry = signal([
    {
      name: ['Brock'],
      team:['Graveler', 'Rhyhorn'],
      items:['Light Ball', 'Charizardite']
    },
    {
    name: ['Misty'],
    team:['Golduck','Quagsire'],
    items:['Mystic']
    },
    {
      name: ['Erika'],
      team:['Jumpluff', 'Tangela'],
      items:['Light Ball', 'Charizardite']
    },
    {
    name: ['Koga'],
    team:['Forretress','Muk'],
    items:['Mystic']
    },
    {
    name: ['Sabrina'],
    team:['Espeon','Alakazam'],
    items:['Mystic']
    }
  ]);
  leaders = this.registry.asReadonly();
}
