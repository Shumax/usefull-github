import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatGridListModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class MaterialModule { }
