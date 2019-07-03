import { NgModule } from '@angular/core';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicInputComponent } from './topic-input/topic-input.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  imports: [
    TopicRoutingModule,
  ],
  declarations: [
    TopicInputComponent,
    TopicDetailComponent,
  ],
})
export class TopicModule { }
