import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectInputComponent } from './project/project-input/project-input.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { TopicInputComponent } from './topic/topic-input/topic-input.component';
import { TopicDetailComponent } from './topic/topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
