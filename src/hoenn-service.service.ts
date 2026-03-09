import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennServiceService {
  private registry = signal([
    {
      name: ['Roxanne'],
      team:['Geodude', 'Nosepass'],
      items:['Light Ball', 'Charizardite']
    },
    {
    name: ['Brawly'],
    team:['Machop','Makuhita'],
    items:['Mystic']
    },
    {
      name: ['Wattson'],
      team:['Magnemite', 'Magneton'],
      items:['Light Ball', 'Charizardite']
    },
    {
    name: ['Flannery'],
    team:['Slugma','Torkoal'],
    items:['Mystic']
    },
    {
    name: ['Winona'],
    team:['Pelipper','Swellow'],
    items:['Mystic']
    }
  ]);
  leaders = this.registry.asReadonly();

}
