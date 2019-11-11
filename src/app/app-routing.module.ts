import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralMenComponent } from './general-men/general-men.component';
import { GeneralWomenComponent } from './general-women/general-women.component';
import { MensTeamComponent } from './mens-team/mens-team.component';
import { WomensTeamComponent } from './womens-team/womens-team.component';


const routes: Routes = [
  { path: 'men', component: GeneralMenComponent },
  { path: 'women', component: GeneralWomenComponent },
  { path: 'mens-team', component: MensTeamComponent },
  { path: 'womens-team', component: WomensTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
