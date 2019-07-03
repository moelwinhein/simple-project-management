import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    NavComponent,
    SidebarComponent,
  ],
  exports: [
    NavComponent,
    SidebarComponent,
  ],
})
export class ComponentsModule { }
