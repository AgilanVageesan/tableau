import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableauComponent } from './components/tableau/tableau.component';

const routes: Routes = [
 {path:'',component:HomeComponent} ,
{path:'home',component:HomeComponent} ,

 {path:'covid',component:TableauComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 