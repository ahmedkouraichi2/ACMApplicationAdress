import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckserviceRoutingModule } from './checkservice-routing.module';
import { CheckroutingComponent } from './checkrouting/checkrouting.component';


@NgModule({
  declarations: [
    CheckroutingComponent,
    
  ],
  imports: [
    CommonModule,
    CheckserviceRoutingModule
  ],
  exports :[
    CheckroutingComponent
  ]
})
export class CheckserviceModule { }
