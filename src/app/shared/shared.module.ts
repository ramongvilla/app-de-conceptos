import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from '../shared/components/fab/fab.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component'


@NgModule({
  declarations: [FabComponent, CountriesListComponent],
  imports: [
    CommonModule,

  ],
  exports: [FabComponent, CountriesListComponent]
})
export class SharedModule { }
