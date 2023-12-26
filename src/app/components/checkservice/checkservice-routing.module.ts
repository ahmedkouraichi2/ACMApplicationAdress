import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckroutingComponent } from './checkrouting/checkrouting.component';

const routes: Routes = [
  {path:"",component:CheckroutingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckserviceRoutingModule { }
