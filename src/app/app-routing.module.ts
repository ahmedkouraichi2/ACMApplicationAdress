import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PaieComponent } from './components/paie/paie/paie.component';

const routes: Routes = [
  
  {path:"home",component:HomeComponent},
  {path:"blog",component:BlogComponent},
  {path:"paie",component:PaieComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
