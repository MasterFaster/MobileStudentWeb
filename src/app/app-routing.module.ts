import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PresenceCheckComponent } from './presence-check/presence-check.component';
import { GradesComponent } from './grades/grades.component';
import { CancelClassesComponent } from './cancel-classes/cancel-classes.component';
export const AppRoutes: Routes = [
  { path: 'presence-check', component: PresenceCheckComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'cancel-classes', component: CancelClassesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
