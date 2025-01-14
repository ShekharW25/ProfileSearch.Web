import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

 
const routes: Routes = [
  { path: 'search-profile', component: SearchProfileComponent }, // Add this route
  { path: 'add-profile', component: AddProfileComponent }, // Search profile route
  { path: '', redirectTo: '/search-profile', pathMatch: 'full' }, // Optional default route
  { path: '**', redirectTo: '/search-profile' }, // Optional wildcard route for unmatched paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
