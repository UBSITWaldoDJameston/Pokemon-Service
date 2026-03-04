import { Routes } from '@angular/router';
import { JohtoLeadersComponent } from '../johto-leaders/johto-leaders.component';
import { KantoLeadersComponent } from '../kanto-leaders/kanto-leaders.component';
import { HoennLeadersComponent } from '../hoenn-leaders/hoenn-leaders.component';
export const routes: Routes = [
    {path: 'kanto', component: KantoLeadersComponent},
    {path: 'johto', component: JohtoLeadersComponent},
    {path: 'hoenn', component: HoennLeadersComponent},
    {path:'', redirectTo:'home', pathMatch: 'full'}

];