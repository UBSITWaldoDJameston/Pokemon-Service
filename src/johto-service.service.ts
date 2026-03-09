import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JohtoServiceService {
  private registry = signal([
    {
      name: ['Falkner'],
      team:['Pidgey', 'Pidgeotto'],
      items:['Light Ball', 'Charizardite']
    },
    {
    name: ['Bugsy'],
    team:['Scyther','Metapod'],
    items:['Mystic']
    },
    {
      name: ['Whitney'],
      team:['Clefairy', 'Miltank'],
      items:['Light Ball', 'Charizardite']
    },
    {
    name: ['Morty'],
    team:['Gastly','Gengar'],
    items:['Mystic']
    },
    {
    name: ['Clair'],
    team:['Charizard','Dragonite'],
    items:['Mystic']
    }
  ]);
  leaders = this.registry.asReadonly();
}
