import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectInputComponent } from './project-input/project-input.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full',
  },
  {
    path: 'input',
    component: ProjectInputComponent,
  },
  {
    path: 'detail',
    component: ProjectDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
