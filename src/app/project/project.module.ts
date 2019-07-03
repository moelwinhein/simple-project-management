import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectInputComponent } from './project-input/project-input.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    ProjectRoutingModule,
  ],
  declarations: [
    ProjectInputComponent,
    ProjectDetailComponent,
  ],
})
export class ProjectModule { }
