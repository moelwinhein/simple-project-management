import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectInputComponent } from './project-input/project-input.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ProjectRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    ProjectInputComponent,
    ProjectDetailComponent,
  ],
})
export class ProjectModule { }
