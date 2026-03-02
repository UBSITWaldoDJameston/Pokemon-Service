import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
//Defining 5 Teams with trainer amd items
  private registry = signal([
    {
      name: ['Ash'],
      team:['Pikachu', 'Charizard'],
      items:['Light Ball', 'Charizardite Y']
    },
    {
    name: ['Misty'],
    team:['Starmie','Psyduck'],
    items:['Mystic']
    },
    {
      name: ['Claire'],
      team:['Pikachu', 'Charizard'],
      items:['Light Ball', 'Charizardite Y']
    },
    {
    name: ['Falkner'],
    team:['Charizard','Psyduck'],
    items:['Mystic']
    },
    {
    name: ['Brock'],
    team:['Starmie','Psyduck'],
    items:['Mystic']
    }
  ]);
  //Expose Signal as read only 
  trainers = this.registry.asReadonly();
}
