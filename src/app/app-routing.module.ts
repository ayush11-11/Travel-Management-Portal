import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component'
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:"*",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }