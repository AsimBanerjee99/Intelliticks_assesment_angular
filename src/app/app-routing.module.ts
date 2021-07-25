import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewListedPropertyComponent } from './view-listed-property/view-listed-property.component';

const routes: Routes = [
  { path: 'add_property', component: AddPropertyComponent},
  { path: '', component: ViewListedPropertyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
