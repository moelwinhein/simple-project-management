import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicInputComponent } from './topic-input/topic-input.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full',
  },
  {
    path: 'input',
    component: TopicInputComponent,
  },
  {
    path: 'detail',
    component: TopicDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
